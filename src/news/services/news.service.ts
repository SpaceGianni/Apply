import { Injectable } from '@nestjs/common';
import { NewsProvider } from '../provider/news.provider';
import { NewsRepository } from '../repository/news.repository';

@Injectable()
export class NewsService {
  constructor(
    private readonly newsProvider: NewsProvider,
    private readonly newsRepository: NewsRepository,
  ) {}

  async findAndSaveNews() {
    const rawNews = await this.newsProvider.findAll();
    for (const news of rawNews.hits) {
      //validar datos
      await this.newsRepository.create({
        title: news.title || news.story_title,
        url: news.url || news.story_url,
        author: news.author,
        date: news.created_at,
      });
    }
  }
}
