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

  async create(createDialecticDto: CreateDialecticDto) {
    const dialectic = this.dialecticRepository.create({
      ...createDialecticDto,
    });
    await this.dialecticRepository.save(dialectic);
    return dialectic;
  }

  findAll() {
    return this.dialecticRepository.find({
      relations: {
        propositions: true,
      },
    });
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
