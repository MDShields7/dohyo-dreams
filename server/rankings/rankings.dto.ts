import { IsOptional, IsString, ValidateNested } from 'class-validator';
import CreateAddressDto from '../wrestlers/wrestlers.dto';

class CreateRankingsDto {
  @IsString()
  public rank: string;

  @IsString()
  public tournament: string;

  @ValidateNested()
  public wrestler?: CreateWrestlersDto;
}
export default CreateRankingsDto;