
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import winston from 'winston';
import expressWinston from 'express-winston';
import { v4 as uuidv4 } from 'uuid';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.use(helmet());
  app.use(compression());
  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
  });

  // Global input validation
  const { ValidationPipe } = await import('@nestjs/common');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
    transformOptions: { enableImplicitConversion: true },
  }));

  // Correlation ID middleware
  app.use((req, res, next) => {
    req.id = req.headers['x-correlation-id'] || uuidv4();
    res.setHeader('x-correlation-id', req.id);
    next();
  });

  // Winston logger
  app.use(
    expressWinston.logger({
      transports: [
        new winston.transports.Console(),
      ],
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      meta: true,
      msg: (req, res) => {
        return JSON.stringify({
          method: req.method,
          url: req.url,
          status: res.statusCode,
          correlationId: req.id,
          responseTime: res.getHeader('X-Response-Time'),
        });
      },
      expressFormat: false,
      colorize: false,
      ignoreRoute: function (req, res) { return false; },
    })
  );

  // Response time logging
  app.use((req, res, next) => {
    const start = process.hrtime();
    res.on('finish', () => {
      const diff = process.hrtime(start);
      const ms = diff[0] * 1e3 + diff[1] / 1e6;
      res.setHeader('X-Response-Time', ms.toFixed(2) + 'ms');
    });
    next();
  });

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
