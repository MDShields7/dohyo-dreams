import { IsBoolean, IsEnum, IsISO8601, IsString } from 'class-validator';
import locale from './tournaments.locale.enum';

class CreateTournamentsDto {
  @IsString()
  public name: string;

  @IsISO8601()
  public dateStart: string;

  @IsISO8601()
  public dateEnd: string;

  @IsBoolean()
  public cancelled: boolean;

  @IsEnum(locale)
  public location: locale;
}

export default CreateTournamentsDto;
