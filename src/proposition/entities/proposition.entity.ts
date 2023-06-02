import { Dialectic } from 'src/dialectic/entities/dialectic.entity';
import { Token } from 'src/tokens/entities/token.entity';
import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Proposition {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Dialectic, (dialectic) => dialectic.propositions)
  dialectic: Dialectic;

  @OneToMany(() => Token, (token) => token.id)
  @JoinTable()
  tokens: Token[];

  @Column({ length: 50 })
  proposition: string;

  @Column('int', { array: true })
  tokenization: number[];

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
