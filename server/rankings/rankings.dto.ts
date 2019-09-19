import { IsString, IsInt } from 'class-validator';

class CreateRankingsDto {
  @IsString()
  public rank: string;

  @IsInt()
  public tournamentId: number;

  @IsInt()
  public wrestlerId: number;
}

export default CreateRankingsDto;
