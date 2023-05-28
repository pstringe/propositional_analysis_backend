import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Proposition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  proposition: string;

  @Column()
  tokenization: number[];

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
