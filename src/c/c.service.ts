import { Injectable } from '@nestjs/common';
import { DService } from 'src/d/d.service';

@Injectable()
export class CService {
  constructor(private readonly dService: DService) {}
}
