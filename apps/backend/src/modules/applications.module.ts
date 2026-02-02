import { Module } from '@nestjs/common';
import { ApplicationService } from '../services/application.service';
import { ApplicationController } from '../controllers/application.controller';

@Module({
  providers: [ApplicationService],
  controllers: [ApplicationController],
  exports: [ApplicationService],
})
export class ApplicationsModule {}
