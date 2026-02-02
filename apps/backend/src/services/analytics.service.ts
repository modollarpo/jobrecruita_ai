
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getJobAnalytics(jobId: string) {
    // Example: return number of applications for a job
    const applications = await this.prisma.application.count({ where: { jobId } });
    return { jobId, applications };
  }

  async getCandidateAnalytics(candidateId: string) {
    // Example: return number of matches for a candidate
    const matches = await this.prisma.match.count({ where: { candidateId } });
    return { candidateId, matches };
  }
}
