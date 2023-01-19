import { Module } from '@nestjs/common';
import { NewsController } from './App/controllers/app.controller';
import { AppService } from './App/services/app.service';
import {HttpModule} from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './App/repository/news.module';




@Module({
  imports: [HttpModule, MongooseModule.forRoot('mongodb://localhost:27017/hknews'),
  NewsModule,
],
  controllers: [NewsController],
  providers: [AppService],
})

export class AppModule {}
