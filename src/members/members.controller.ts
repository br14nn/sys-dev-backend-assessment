import { Body, Controller, Post } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';

@Controller('members')
export class MembersController {
  constructor(private membersService: MembersService) {}

  @Post()
  async createMember(@Body() createMember: CreateMemberDto) {
    return await this.membersService.createMember(createMember);
  }
}
