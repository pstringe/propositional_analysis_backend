import { Injectable } from '@nestjs/common';
import { CreateDialecticDto } from './dto/create-dialectic.dto';
import { UpdateDialecticDto } from './dto/update-dialectic.dto';
import { Dialectic } from './entities/dialectic.entity';
import { Repository, Timestamp } from 'typeorm';
import { to_timestamp } from 'pg';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DialecticService {
  constructor(
    @InjectRepository(Dialectic)
    private dialecticRepository: Repository<Dialectic>,
  ) {}

  async create(createDialecticDto: CreateDialecticDto) {
    console.log(createDialecticDto);
    const dialectic = this.dialecticRepository.create({
      ...createDialecticDto,
    });
    await this.dialecticRepository.save(dialectic);
    return dialectic;
  }

  findAll() {
    return this.dialecticRepository.find();
  }

  findOne(id: number) {
    return this.dialecticRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateDialecticDto: UpdateDialecticDto) {
    return this.dialecticRepository.save({
      id,
      ...updateDialecticDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} dialectic`;
  }
}
