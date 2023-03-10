import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News } from '../model/news.model';
import { CreateNewsDto } from '../dto/create-news.dto';

@Injectable()
export class NewsRepository {
  constructor(
    @InjectModel(News.name) private readonly newsModel: Model<News>,
  ) {}

  create(createNewsDto: CreateNewsDto): Promise<News> {
    const createNews = new this.newsModel(createNewsDto);
    return createNews.save();
  }
}
