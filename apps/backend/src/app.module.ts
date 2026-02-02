import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { UsersModule } from './modules/users.module';
import { JobsModule } from './modules/jobs.module';
import { MatchesModule } from './modules/matches.module';
import { ApplicationsModule } from './modules/applications.module';
import { AnalyticsModule } from './modules/analytics.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { AiController } from './controllers/ai.controller';
import { MatchEngineService } from './ai-engine/services/matchEngine.service';
// import other modules as needed

@Module({
  imports: [
    UsersModule,
    JobsModule,
    MatchesModule,
    ApplicationsModule,
    AnalyticsModule,
    // add other modules here
  ],
  controllers: [AuthController, AiController],
  providers: [PrismaService, AuthService, MatchEngineService],
})
export class AppModule {}
