import { Injectable } from '@nestjs/common';
//import { News } from '../src/news.model';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, firstValueFrom, Observable } from 'rxjs'; 
import { AxiosResponse } from 'axios';
import { News } from '../interfaces/app.interface';

@Injectable()
export class NewsService {
  constructor(private readonly httpService: HttpService) {}
  async findAll(): Promise<AxiosResponse<News>> {
   const { data } = await firstValueFrom(this.httpService.get('https://hn.algolia.com/api/v1/search_by_date', {
    
    }));
    return data;
  }
}
