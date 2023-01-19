import { Injectable } from '@nestjs/common';
import { model, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Newss, NewsSchema} from '../repository/news.schema';
import { CreateNewsDto} from '../dto/create-news.dto';



//Create the news interface
export interface NewsInterface {
    created_at:       Date;
    title:            null | string;
    url:              null | string;
    author:           string;
    story_id:         number | null;
    story_title:      null | string;
    story_url:        null | string;
    objectID:         string;
  } 

@Injectable()
export class NewsService {

  constructor(
    @InjectModel(Newss.name)
    private readonly newsModel: Model<Newss>) {}

    async create(createNewsDto : CreateNewsDto):Promise<Newss> {
        const createdNews = new this.newsModel(createNewsDto);


    return createdNews.save();
    }

    findAll():Promise<Newss[]>{
        return this.newsModel.find().exec();
    }

    async findAll(): Promise<AxiosResponse<DirtyNews>> {
        const { data } = await firstValueFrom(this.httpService.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs', {
         headers: {
           'Accept-Encoding': '*',
         }
         }))
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