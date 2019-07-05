import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Rankings from '../rankings/rankings.entity';

@Entity()
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
  public birthDate: string;

  @Column()
  public birthPlace: string;

  @Column()
  public height: number;

  @Column()
  public weight: number;

  @Column()
  public retired: boolean;

  @Column()
  public mawashi: string;

  @OneToMany(() => Rankings, (ranking: Rankings) => ranking.wrestler)
  public rankings: Rankings[];
}

export default Wrestlers;
