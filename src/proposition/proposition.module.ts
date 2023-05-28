import { Module } from '@nestjs/common';
import { PropositionService } from './proposition.service';
import { PropositionController } from './proposition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proposition } from './entities/proposition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proposition])],
  controllers: [PropositionController],
  providers: [PropositionService],
})
export class PropositionModule {}
