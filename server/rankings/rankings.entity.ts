import { PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";


class Rankings {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public rank: string;

  @ManyToOne(() => Basho, (banzuke: Basho){ = })

  @Column()
  public wrestler: 
}

export default Rankings;