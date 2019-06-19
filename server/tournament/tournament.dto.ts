import { IsOptional, IsString, ValidateNested } from 'class-validator';
import locale from './tournament.locale.enum';
import CreateRankingsDto from '../rankings/rankings.dto';

class CreateTournamentDto {
  @IsString()
  public name: string;

  @IsString()
  public year: string;

  @IsString()
  public dateStart: string;

  @IsString()
  public dateEnd: string;

  @IsString()
  public cancelled: string;

  @IsString()
  public location: locale;

  @IsOptional()
  @ValidateNested()
  public rankings?: CreateRankingsDto;
}
export default CreateTournamentDto;