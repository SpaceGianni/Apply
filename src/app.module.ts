import { Module } from '@nestjs/common';
import { NewsController } from './news/controllers/app.controller';
import { AppService } from './news/services/app.service';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost:27017/hknews'),
    NewsModule,
  ],
  controllers: [NewsController],
  providers: [AppService],
})
export class AppModule {}
