import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from "typeorm";
import Tournaments from "../tournaments/tournaments.entity";
import Wrestlers from '../wrestlers/wrestlers.entity';

@Entity()
class Rankings {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public rank: string;

  @ManyToOne(() => Tournaments, (tournament: Tournaments) => tournament.rankings)
  public tournament: Tournaments;

  @ManyToOne(() => Wrestlers, (wrestler: Wrestlers) => wrestler.rankings)
  public wrestler: Wrestlers;
}

export default Rankings;