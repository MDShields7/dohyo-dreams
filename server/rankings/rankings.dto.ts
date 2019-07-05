import { IsString } from 'class-validator';

class CreateRankingsDto {
  @IsString()
  public rank: string;

  @IsString()
  public tournament: string;

  @IsString()
  public wrestler: string;
}
export default CreateRankingsDto;
