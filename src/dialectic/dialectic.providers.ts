import { DataSource } from 'typeorm';
import { Dialectic } from './entities/dialectic.entity';

export const DialecticProviders = [
  {
    provide: 'DIALECTIC_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Dialectic),
    inject: ['DATA_SOURCE'],
  },
];
