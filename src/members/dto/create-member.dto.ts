import { IsString, IsIn, IsNotEmpty } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty({ message: "'name' must not be empty." })
  @IsString()
  name: string;

  @IsIn(['backend', 'frontend', 'UI/UX'], {
    message: "'role' must be one of the following: backend, frontend, UI/UX.",
  })
  role: string;
}
