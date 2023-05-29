import { Injectable } from '@nestjs/common';
import { CreateDialecticDto } from './dto/create-dialectic.dto';
import { UpdateDialecticDto } from './dto/update-dialectic.dto';
import { Dialectic } from './entities/dialectic.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DialecticService {
  constructor(
    @InjectRepository(Dialectic)
    private dialecticRepository: Repository<Dialectic>,
  ) {}

  create(createDialecticDto: CreateDialecticDto) {
    console.log(createDialecticDto);
    return this.dialecticRepository.create({
      ...createDialecticDto,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
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
