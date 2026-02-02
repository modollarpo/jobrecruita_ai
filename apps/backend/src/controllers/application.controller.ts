import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApplicationService } from '../services/application.service';

@Controller('applications')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Get()
  findAll() {
    return this.applicationService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.applicationService.findById(id);
  }

  @Post()
  create(@Body() createApplicationDto: any) {
    return this.applicationService.create(createApplicationDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationDto: any) {
    return this.applicationService.update(id, updateApplicationDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.applicationService.delete(id);
  }
}
