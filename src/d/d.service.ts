import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CService } from 'src/c/c.service';

@Injectable()
export class DService {
  constructor(
    @Inject(forwardRef(() => CService)) private readonly cService: CService,
  ) {
    console.log('Inside DService, logging cService', cService);
  }
}
