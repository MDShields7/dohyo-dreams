

class CreateWrestlersDto {
  @IsString()
  public familyName: string;

  @IsString()
  public givenName: string;

  @IsString()
  public ringName: string;

  @IsString()
  public birthDate: Date;
}