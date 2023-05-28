import { Test, TestingModule } from '@nestjs/testing';
import { DialecticController } from './dialectic.controller';
import { DialecticService } from './dialectic.service';

describe('DialecticController', () => {
  let controller: DialecticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DialecticController],
      providers: [DialecticService],
    }).compile();

    controller = module.get<DialecticController>(DialecticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
