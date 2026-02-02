import { Module } from '@nestjs/common';
import { JobService } from '../services/job.service';
import { JobController } from '../controllers/job.controller';

@Module({
  providers: [JobService],
  controllers: [JobController],
  exports: [JobService],
})
export class JobsModule {}
