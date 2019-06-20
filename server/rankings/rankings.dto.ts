import { IsOptional, IsString, ValidateNested } from 'class-validator';
import CreateAddressDto from '../wrestlers/wrestlers.dto';

class CreateRankingsDto {
  @IsString()
  public rank: string;

  @ValidateNested()
  public tournament?: CreateTournamentsDto;

  @ValidateNested()
  public wrestler?: CreateWrestlersDto;
}
export default CreateRankingsDto;