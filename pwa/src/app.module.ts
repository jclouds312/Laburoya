import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UserModule } from './user/user.module';

@Module({
  controllers: [UserController],
imports: [UserModule],
  providers: [UserService, PrismaService],
})
export class UserModule {}
