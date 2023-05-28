import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Dialectic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
