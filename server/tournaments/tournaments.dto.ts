import { IsOptional, IsString, ValidateNested, IsBoolean } from 'class-validator';
import locale from './tournaments.locale.enum';
import CreateRankingsDto from '../rankings/rankings.dto';

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
