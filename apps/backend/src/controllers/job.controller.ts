import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { JobService } from '../services/job.service';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  findAll() {
    return this.jobService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.jobService.findById(id);
  }

  @Post()
  create(@Body() createJobDto: any) {
    return this.jobService.create(createJobDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobDto: any) {
    return this.jobService.update(id, updateJobDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.jobService.delete(id);
  }
}
