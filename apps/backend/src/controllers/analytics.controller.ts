import { Controller, Get, Param } from '@nestjs/common';
import { AnalyticsService } from '../services/analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('job/:jobId')
  getJobAnalytics(@Param('jobId') jobId: string) {
    return this.analyticsService.getJobAnalytics(jobId);
  }

  @Get('candidate/:candidateId')
  getCandidateAnalytics(@Param('candidateId') candidateId: string) {
    return this.analyticsService.getCandidateAnalytics(candidateId);
  }
}
