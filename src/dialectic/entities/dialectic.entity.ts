import { Proposition } from 'src/proposition/entities/proposition.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Dialectic {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Proposition, (proposition) => proposition.dialectic)
  propositions: Proposition[];

  @Column({ length: 50 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
