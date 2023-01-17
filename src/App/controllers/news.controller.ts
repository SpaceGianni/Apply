import { Controller, Get, Delete, Param, Query, Header } from '@nestjs/common';
import { NewsService } from '../services/news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getNewsFromAPI(): Promise<any> {
    return (await this.newsService.findAll())
  }

  @Get('test')
  getNewsFiltered(@Query('limit') limit: 20, @Query('offset') offset: 0) {
    return `News: limit => ${limit} offset=> ${offset}`;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
