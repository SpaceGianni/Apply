import { Injectable } from '@nestjs/common';
//import { News } from '../src/news.model';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { DirtyNews } from '../interfaces/news.interface';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async findAll(): Promise<AxiosResponse<DirtyNews>> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        'https://hn.algolia.com/api/v1/search_by_date?query=nodejs',
        {
          headers: {
            'Accept-Encoding': '*',
          },
        },
      ),
    );
    return data;

    /*return data.hits.forEach(item=> {
      const news =
      {
      title: item.title,
      author: item.author,
      date : item.created_at,
      url : item.url
      }
      this.newsModel.create(news)
    });*/
  }
}
