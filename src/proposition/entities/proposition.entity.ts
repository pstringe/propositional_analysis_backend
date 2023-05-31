import { Dialectic } from 'src/dialectic/entities/dialectic.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proposition {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Dialectic, (dialectic) => dialectic.propositions)
  dialectic: Dialectic;

  @Column({ length: 50 })
  proposition: string;

  @Column('int', { array: true })
  tokenization: number[];

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
