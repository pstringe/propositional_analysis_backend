import { Test, TestingModule } from '@nestjs/testing';
import { DialecticService } from './dialectic.service';

describe('DialecticService', () => {
  let service: DialecticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DialecticService],
    }).compile();

    service = module.get<DialecticService>(DialecticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
