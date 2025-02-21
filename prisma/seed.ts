import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const members = await prisma.members.createMany({
    data: [
      {
        name: 'John Doe',
        role: 'frontend',
      },
      { name: 'Jane Smith', role: 'UI/UX' },
    ],
  });

  const projects = await prisma.projects.create({
    data: {
      name: 'Project #1',
      description: 'Web application project',
    },
  });

  const memberProjects = await prisma.member_projects.createMany({
    data: [
      {
        member_id: 1,
        project_id: 1,
      },
      {
        member_id: 2,
        project_id: 1,
      },
    ],
  });

  console.log({ members, memberProjects, projects });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
