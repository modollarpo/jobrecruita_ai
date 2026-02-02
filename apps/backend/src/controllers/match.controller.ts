import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MatchService } from '../services/match.service';

@Controller('matches')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  findAll() {
    return this.matchService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.matchService.findById(id);
  }

  @Post()
  create(@Body() createMatchDto: any) {
    return this.matchService.create(createMatchDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchDto: any) {
    return this.matchService.update(id, updateMatchDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.matchService.delete(id);
  }
}
