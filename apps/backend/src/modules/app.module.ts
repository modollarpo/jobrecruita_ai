
import { Module } from '@nestjs/common';
import { AiEngineModule } from '../ai-engine/modules/ai-engine.module';
// Import all other modules (uncomment as you implement them)
// import { UsersModule } from '../modules/users.module';
// import { JobsModule } from '../modules/jobs.module';
// import { MatchesModule } from '../modules/matches.module';
// import { ApplicationsModule } from '../modules/applications.module';
// import { AnalyticsModule } from '../modules/analytics.module';

@Module({
  imports: [
  // UsersModule,
  // JobsModule,
  // MatchesModule,
  // ApplicationsModule,
  // AnalyticsModule,
  AiEngineModule,
  ],
})
export class AppModule {}
