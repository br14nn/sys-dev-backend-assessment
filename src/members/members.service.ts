import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';

@Injectable()
export class MembersService {
  async createMember(createMember: CreateMemberDto) {
    return createMember;
  }
}
