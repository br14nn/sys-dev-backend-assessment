import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get(':id/members')
  async getMembers(@Param() params: { id: string }) {
    return this.projectsService.getMembers(+params.id);
  }
}
