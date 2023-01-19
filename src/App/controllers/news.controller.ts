import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNewsDto } from '../dto/create-news.dto';
import {NewsService} from '../services/news.service';

@Controller('updatednews')
export class NewsController {
 constructor (
  private readonly newsService : NewsService 
 ) {}

  @Get()
  findAll(){
    return this.newsService.findAll();
  }


}