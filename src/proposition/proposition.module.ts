import { Module } from '@nestjs/common';
import { PropositionService } from './proposition.service';
import { PropositionController } from './proposition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proposition } from './entities/proposition.entity';
import { DialecticModule } from 'src/dialectic/dialectic.module';
import { TokensModule } from 'src/tokens/tokens.module';
import { Token } from 'src/tokens/entities/token.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Proposition]),
    TypeOrmModule.forFeature([Token]),
    DialecticModule,
    TokensModule,
  ],
  controllers: [PropositionController],
  providers: [PropositionService],
})
export class PropositionModule {}
