import { DataSource } from 'typeorm';
import { Proposition } from './entities/proposition.entity';

export const PropositionProviders = [
  {
    provide: 'PROPOSITION_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(Proposition);
    },
    inject: ['DATA_SOURCE'],
  },
];
