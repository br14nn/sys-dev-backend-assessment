import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private prismaService: PrismaService) {}

  async createMember(createMember: CreateMemberDto) {
    try {
      const member = await this.prismaService.members.create({
        data: {
          ...createMember,
        },
      });

      return {
        mesage: 'Member added successfully.',
        data: member,
      };
    } catch (error: any) {
      return { message: error.message, data: {} };
    }
  }
}
