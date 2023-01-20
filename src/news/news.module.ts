import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { News, NewsSchema } from './model/news.model';
import { NewsService } from './services/news.service';
import { NewsController } from './controllers/news.controller';
import { NewsProvider } from './provider/news.provider';
import { NewsRepository } from './repository/news.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: News.name, schema: NewsSchema }]),
    HttpModule,
  ],
  providers: [NewsService, NewsProvider, NewsRepository],
  exports: [NewsProvider],
  controllers: [NewsController],
})
export class NewsModule {}
