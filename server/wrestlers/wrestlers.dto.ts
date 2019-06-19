import { IsString, IsNumber, IsBoolean } from "class-validator";


class CreateWrestlersDto {
  @IsString()
  public familyName: string;

  @IsString()
  public givenName: string;

  @IsString()
  public ringName: string;

  @IsString()
  public birthDate: string;

  @IsString()
  public birthPlace: string;

  @IsNumber()
  public height: number;

  @IsNumber()
  public weight: number;

  @IsBoolean()
  public retired: boolean;
}

export default CreateWrestlersDto;