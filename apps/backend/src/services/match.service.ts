
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class MatchService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.match.findMany();
  }

  async findById(id: string) {
    return this.prisma.match.findUnique({ where: { id } });
  }

  async create(data: any) {
    return this.prisma.match.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.match.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.match.delete({ where: { id } });
  }
}
