import { Injectable } from '@nestjs/common';
import { CreatePropositionDto } from './dto/create-proposition.dto';
import { UpdatePropositionDto } from './dto/update-proposition.dto';
import { Repository } from 'typeorm';
import { Proposition } from './entities/proposition.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DialecticService } from 'src/dialectic/dialectic.service';

@Injectable()
export class PropositionService {
  constructor(
    @InjectRepository(Proposition)
    private propositionsRepository: Repository<Proposition>,
    private dialecticService: DialecticService,
  ) {}

  async create(createPropositionDto: CreatePropositionDto) {
    const dialectic = await this.dialecticService.findOne(
      createPropositionDto.dialectic,
    );
    console.log({ dialectic });
    const proposition = await this.propositionsRepository.create({
      ...createPropositionDto,
      dialectic,
    });
    console.log({ proposition });
    await this.propositionsRepository.save(proposition);
    return proposition;
  }

  findAll() {
    return this.propositionsRepository.find({
      relations: {
        dialectic: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} proposition`;
  }

  update(id: number, updatePropositionDto: UpdatePropositionDto) {
    return `This action updates a #${id} proposition`;
  }

  remove(id: number) {
    return `This action removes a #${id} proposition`;
  }
}
