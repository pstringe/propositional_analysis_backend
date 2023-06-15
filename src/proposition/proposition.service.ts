import { Injectable } from '@nestjs/common';
import { CreatePropositionDto } from './dto/create-proposition.dto';
import { UpdatePropositionDto } from './dto/update-proposition.dto';
import { Repository } from 'typeorm';
import { Proposition } from './entities/proposition.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DialecticService } from 'src/dialectic/dialectic.service';
import { TokensService } from 'src/tokens/tokens.service';

@Injectable()
export class PropositionService {
  constructor(
    @InjectRepository(Proposition)
    private propositionsRepository: Repository<Proposition>,
    private dialecticService: DialecticService,
    private tokensService: TokensService,
  ) {}

  async create(createPropositionDto: CreatePropositionDto) {
    const dialectic = await this.dialecticService.findOne(
      createPropositionDto.dialectic,
    );
    const tokenization = await this.tokensService.tokenizeString(
      createPropositionDto.proposition,
    );
    const proposition = await this.propositionsRepository.create({
      ...createPropositionDto,
      dialectic,
      tokenization,
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
