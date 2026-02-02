import { Controller, Post, Body } from '@nestjs/common';
import { MatchEngineService } from '../ai-engine/services/matchEngine.service';

@Controller('ai')
export class AiController {
  constructor(private readonly matchEngine: MatchEngineService) {}

  @Post('match-score')
  async getMatchScore(@Body() dto: { candidateId: string; jobId: string }) {
    // TODO: Use AI engine to compute match score
    return { score: await this.matchEngine.scoreCandidateForJob(dto.candidateId, dto.jobId) };
  }
}
