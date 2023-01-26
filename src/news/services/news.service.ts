import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNewsDto } from '../dto/create-news.dto';
import { Hit } from '../interfaces/news.interface';
import { NewsProvider } from '../provider/news.provider';
import { NewsRepository } from '../repository/news.repository';

@Injectable()
export class NewsService {
  constructor(
    private readonly newsProvider: NewsProvider,
    private readonly newsRepository: NewsRepository,
  ) {}

  async findAndSaveNews(): Promise<CreateNewsDto[]> {
    //const rawNews = await this.newsProvider.findAll();
    //console.log(rawNews.hits[0]);
    const newsList = [];
    const { hits } = await this.newsProvider.findAll();
    for (const hit of hits) {
      const objectNews = new CreateNewsDto();
      objectNews.author = hit.author;
      objectNews.date = hit.created_at;
      objectNews.title = hit.story_title || hit.title;
      objectNews.url = hit.url || hit.story_url;
      const news = await this.newsRepository.create(objectNews);
      objectNews.id = news._id;
      newsList.push(objectNews);
    }
    return newsList;
  }
}
