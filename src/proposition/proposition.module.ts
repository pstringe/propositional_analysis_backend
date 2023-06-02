import { Module } from '@nestjs/common';
import { PropositionService } from './proposition.service';
import { PropositionController } from './proposition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proposition } from './entities/proposition.entity';
import { DialecticModule } from 'src/dialectic/dialectic.module';
import { TokensModule } from 'src/tokens/tokens.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Proposition]),
    DialecticModule,
    TokensModule,
  ],
  controllers: [PropositionController],
  providers: [PropositionService],
})
export class PropositionModule {}
