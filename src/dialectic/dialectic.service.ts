import { Injectable } from '@nestjs/common';
import { CreateDialecticDto } from './dto/create-dialectic.dto';
import { UpdateDialecticDto } from './dto/update-dialectic.dto';

@Injectable()
export class DialecticService {
  create(createDialecticDto: CreateDialecticDto) {
    console.log(createDialecticDto);
    return 'This action adds a new dialectic';
  }

  findAll() {
    return `This action returns all dialectic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dialectic`;
  }

  update(id: number, updateDialecticDto: UpdateDialecticDto) {
    return `This action updates a #${id} dialectic`;
  }

  remove(id: number) {
    return `This action removes a #${id} dialectic`;
  }
}
