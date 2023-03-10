import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { DirtyNews } from '../interfaces/news.interface';
import { News } from '../model/news.model';

@Injectable()
export class NewsProvider {
  constructor(private readonly httpService: HttpService) {}
  async findAll(): Promise<DirtyNews> {
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
  }
}
