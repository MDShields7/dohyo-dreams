import { PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import locale from "./basho.locale.enum";

class Basho {
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

  @Column()
  public location: locale;

  @OneToMany(() => Rankings, (rankings: Rankings) => rankings.banzuke)

}