import { PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";


class Rankings {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public rank: string;

  @ManyToOne(() => tournaments, (tournament: Tournaments) => tournament.rankings)
  public tournament: Tournaments;

  @ManyToOne(() => Wrestlers, (wrestler: Wrestlers) => wrestler.rankings)
  public wrestler: Wrestlers;
}

export default Rankings;