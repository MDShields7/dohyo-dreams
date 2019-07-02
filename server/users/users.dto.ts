import { IsBoolean, IsString } from 'class-validator';

class CreateUsersDto {
  @IsString()
  public fullName: string;

  @IsString()
  public email: string;

  @IsString()
  public password: string;

  @IsBoolean()
  public admin: boolean;
}

export default CreateUsersDto;