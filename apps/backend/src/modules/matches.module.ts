import { Module } from '@nestjs/common';
import { MatchService } from '../services/match.service';
import { MatchController } from '../controllers/match.controller';

@Module({
  providers: [MatchService],
  controllers: [MatchController],
  exports: [MatchService],
})
export class MatchesModule {}
