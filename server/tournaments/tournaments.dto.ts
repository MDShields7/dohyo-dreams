import { IsBoolean, IsString } from 'class-validator';
import locale from './tournaments.locale.enum';

class CreateTournamentsDto {
  @IsString()
  public name: string;

  @IsString()
  public dateStart: string;

  @IsString()
  public dateEnd: string;

  @IsBoolean()
  public cancelled: boolean;

  @IsString()
  public location: locale;
}

export default CreateTournamentsDto;
