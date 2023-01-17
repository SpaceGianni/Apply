import { Module } from '@nestjs/common';
import { NewsController } from './App/controllers/news.controller';
import { NewsService } from './App/services/news.service';
import {HttpModule} from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [NewsController],
  providers: [NewsService],
})
export class AppModule {}
