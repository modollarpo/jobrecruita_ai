
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class JobService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.job.findMany();
  }

  async findById(id: string) {
    return this.prisma.job.findUnique({ where: { id } });
  }

  async create(data: any) {
    return this.prisma.job.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.job.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.job.delete({ where: { id } });
  }
}
