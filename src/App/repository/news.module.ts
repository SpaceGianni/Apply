import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Newss, NewsSchema } from './news.schema';
import { NewsService } from '../services/news.service';
import { NewsController } from '../controllers/news.controller';


@Module({
  imports: [MongooseModule.forFeature([{ name: Newss.name, schema: NewsSchema }])],
  providers: [NewsService],
  controllers: [NewsController],

})
export class NewsModule {}