import { IsOptional, IsString, ValidateNested } from 'class-validator';
import CreateAddressDto from '../rankings/rankings.dto.ts';

class CreateTournamentDto {
  @IsString()
  public name: string;

  @IsString()
  public year: Date;

  @IsString()
  public dateStart: Date;

  @IsString()
  public dateEnd: Date;

  @IsString()
  public cancelled: Date;

  @IsString()
  public location: locale;

  @IsOptional()
  @ValidateNested()
  public rankings?: CreateRankingsDto;
}
export default CreateTournamentDto;