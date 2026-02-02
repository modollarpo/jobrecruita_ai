// Candidate REST & GraphQL controller
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CandidateService } from '../services/candidate.service';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Get()
  findAll() {
    return this.candidateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.candidateService.create(data);
  }
}
