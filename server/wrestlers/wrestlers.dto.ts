import { IsBoolean, IsHexColor, IsISO8601, IsNumber, IsString, } from "class-validator";


class CreateWrestlersDto {
  @IsString()
  public familyName: string;

  @IsString()
  public givenName: string;

  @IsString()
  public ringName: string;

  @IsISO8601()
  public birthDate: string;

  @IsString()
  public birthPlace: string;

  @IsNumber()
  public height: number;

  @IsNumber()
  public weight: number;

  @IsBoolean()
  public retired: boolean;

  @IsHexColor()
  public mawashi: string;
}

export default CreateWrestlersDto;