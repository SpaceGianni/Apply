import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: AppService) {}

  @Get()
  async getNewsFromDB(): Promise<any> {
    return await this.newsService.findAll();
  }
}
