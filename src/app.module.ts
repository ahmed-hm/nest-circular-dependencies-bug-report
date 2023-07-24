import { Module } from '@nestjs/common';
import { CService } from './c/c.service';
import { DService } from './d/d.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: CService,
      useFactory(dService: DService) {
        console.log('Inside CService factory provider, logging dService', dService);
        return CService;
      },
      inject: [DService],
    },
    DService,
  ],
})
export class AppModule {}
