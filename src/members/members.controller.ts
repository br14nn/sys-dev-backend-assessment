import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';

@Controller('members')
export class MembersController {
  constructor(private membersService: MembersService) {}

  @Post()
  async createMember(
    @Body(new ValidationPipe()) createMember: CreateMemberDto,
  ) {
    return await this.membersService.createMember(createMember);
  }
}
