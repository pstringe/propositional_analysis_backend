import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DialecticModule } from './dialectic/dialectic.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropositionModule } from './proposition/proposition.module';
import { Dialectic } from './dialectic/entities/dialectic.entity';
import { Proposition } from './proposition/entities/proposition.entity';
import { TokensModule } from './tokens/tokens.module';
import { Token } from './tokens/entities/token.entity';

@Module({
  imports: [
    DialecticModule,
    PropositionModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Dialectic, Proposition, Token],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TokensModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
