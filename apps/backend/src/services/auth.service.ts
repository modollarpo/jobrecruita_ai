import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserRole } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET || 'devsecret', { expiresIn: '7d' });
    return { token, user };
  }

  async register(email: string, password: string, role: string = 'candidate') {
    const existing = await this.prisma.user.findUnique({ where: { email } });
    if (existing) throw new ConflictException('Email already registered');
    const hash = await bcrypt.hash(password, 10);
    const safeRole: UserRole = (role as UserRole) ?? UserRole.candidate;
    // For now, associate new users to a default tenant. If none exists,
    // create a simple "Default Tenant" record.
    let tenant = await this.prisma.tenant.findFirst();
    if (!tenant) {
      tenant = await this.prisma.tenant.create({
        data: {
          name: 'Default Tenant',
        },
      });
    }
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hash,
        role: safeRole,
        tenantId: tenant.id,
      },
    });

    // Attach a candidate profile for candidate users so they appear in the directory.
    if (safeRole === UserRole.candidate) {
      await this.prisma.candidateProfile.create({
        data: {
          userId: user.id,
          tenantId: tenant.id,
        },
      });
    }
    const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET || 'devsecret', { expiresIn: '7d' });
    return { token, user };
  }
}
