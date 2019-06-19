import { PrimaryGeneratedColumn, Column, OneToOne, Entity } from "typeorm";
import locale from "./tournament.locale.enum";

@Entity()
class Tournament {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public year: Date;

  @Column()
  public dateStart: Date;

  @Column()
  public dateEnd: Date;

  @Column()
  public cancelled: boolean;

  @Column({
    type: "enum",
    enum: "locale"
  })
  public location: locale;

  @OneToMany(() => Rankings, (rankings: Rankings) => rankings.tournament)
  public rankings: Rankings[];
}

export default Tournament;