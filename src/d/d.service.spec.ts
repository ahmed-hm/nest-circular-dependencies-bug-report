import { Test, TestingModule } from '@nestjs/testing';
import { DService } from './d.service';

describe('DService', () => {
  let service: DService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DService],
    }).compile();

    service = module.get<DService>(DService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
