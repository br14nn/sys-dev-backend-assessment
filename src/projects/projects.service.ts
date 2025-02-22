import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prismaService: PrismaService) {}

  async getMembers(id: number) {
    try {
      const projectMembers = await this.prismaService.member_projects.findMany({
        where: {
          project_id: id,
        },
        select: {
          members: {
            omit: {
              created_at: true,
              deleted_at: true,
              updated_at: true,
            },
          },
          assigned_at: true,
        },
      });

      if (projectMembers.length === 0)
        throw new Error('Project does not exist.');

      const formattedProjectMembers = projectMembers.map((value) => ({
        ...value.members,
        assigned_at: value.assigned_at,
      }));

      return { data: formattedProjectMembers };
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }
}
