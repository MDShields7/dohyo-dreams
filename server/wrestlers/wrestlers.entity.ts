import { PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Rankings from "../rankings/rankings.entity";


class Wrestlers {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public familyName: string;

  @Column()
  public givenName: string;

  @Column()
  public ringName: string;

  @Column()
  public birthDate: Date;

  @Column()
  public birthPlace: string;

  @Column()
  public height: number;

  @Column()
  public weight: number;

  @Column()
  public retired: boolean;

  @OneToMany(() => Rankings, (rankings: Rankings) => rankings.wrestler)
  public rankings: Rankings[];
}

export default Wrestlers;