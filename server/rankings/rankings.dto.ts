import { IsOptional, IsString, ValidateNested } from 'class-validator';
import CreateAddressDto from '../wrestlers/wrestlers.dto.ts';

class CreateRankingsDto {
  @IsString()
  public rank: string;

  @IsString()
  public tournament: string;

  @IsOptional()
  @ValidateNested()
  public wrestler?: CreateWrestlerDto;
}
export default CreateRankingsDto;