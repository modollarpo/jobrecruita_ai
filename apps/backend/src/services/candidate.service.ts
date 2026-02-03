// Candidate service with AI match stub
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class CandidateService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.candidateProfile.findMany({
      include: {
        user: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.candidateProfile.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  create(data: any) {
    return this.prisma.candidateProfile.create({ data });
  }
  getAIMatchScore(candidateId: string, jobId: string) {
    // AI scoring stub
    return 92;
  }
}
