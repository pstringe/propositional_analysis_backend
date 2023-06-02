import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from './entities/token.entity';

@Injectable()
export class TokensService {
  constructor(
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>,
  ) {}

  async tokenizeString(text: string) {
    const words = text.split(' ');
    words.map(async (word) => {
      let token = await this.findByString(word);
      if (!token) {
        token = await this.create({ text: word });
      }
      return token;
    });
  }

  async findByString(text: string) {
    return this.tokenRepository.findOneBy({
      text,
    });
  }

  async create(createTokenDto: CreateTokenDto) {
    const token = await this.tokenRepository.create(createTokenDto);
    await this.tokenRepository.save(createTokenDto);
    return token;
  }

  findAll() {
    return `This action returns all tokens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} token`;
  }

  update(id: number, updateTokenDto: UpdateTokenDto) {
    return `This action updates a #${id} token`;
  }

  remove(id: number) {
    return `This action removes a #${id} token`;
  }
}
