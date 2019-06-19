import { IsString } from 'class-validator';

class CreateUserDto {
  @IsString()
  public fullName: string;

  @IsString()
  public email: string;

  @IsString()
  public password: string;

  @IsBoolean()
  public admin: boolean;
}