import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Rankings from '../rankings/rankings.entity';
import locale from './tournaments.locale.enum';

@Entity()
class Tournaments {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public dateStart: string;

  @Column()
  public dateEnd: string;

  @Column()
  public cancelled: boolean;

  @Column({
    type: 'enum',
    enum: 'locale',
  })
  public location: locale;

  @OneToMany(() => Rankings, (rankings: Rankings) => rankings.tournament)
  public rankings: Rankings[];
}

export default Tournaments;
