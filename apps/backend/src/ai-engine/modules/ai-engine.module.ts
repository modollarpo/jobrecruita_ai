import { Module } from '@nestjs/common';
import { MatchEngineService } from '../services/matchEngine.service';
import { AutoApplyService } from '../services/autoApply.service';
import { VideoPitchService } from '../services/videoPitch.service';
import { AnalyticsService } from '../services/analytics.service';

@Module({
  providers: [
    MatchEngineService,
    AutoApplyService,
    VideoPitchService,
    AnalyticsService,
  ],
  exports: [
    MatchEngineService,
    AutoApplyService,
    VideoPitchService,
    AnalyticsService,
  ],
})
export class AiEngineModule {}
