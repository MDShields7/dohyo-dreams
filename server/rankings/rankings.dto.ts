import { IsString, IsInt } from 'class-validator';

class CreateRankingsDto {
  @IsString()
  public rank: string;

  // @IsInt()
  // public tournament: number;

  // @IsInt()
  // public wrestler: number;
}

export default CreateRankingsDto;