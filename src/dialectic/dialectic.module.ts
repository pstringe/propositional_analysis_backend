import { Module } from '@nestjs/common';
import { DialecticService } from './dialectic.service';
import { DialecticController } from './dialectic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dialectic } from './entities/dialectic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dialectic])],
  controllers: [DialecticController],
  providers: [DialecticService],
})
export class DialecticModule {}
