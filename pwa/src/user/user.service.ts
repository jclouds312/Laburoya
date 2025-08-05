import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  createUser(data) {
    return this.prisma.user.create({ data });
  }

  getUserById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  getAllUsers() {
    return this.prisma.user.findMany();
  }

  updateUser(id: string, data) {
    return this.prisma.user.update({ where: { id }, data });
  }

  deleteUser(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
