import { IsString, IsDate, IsMongoId } from 'class-validator';
import { Date } from 'mongoose';

export class CreateNewsDto {
  @IsMongoId()
  id: string;

  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  url: string;

  @IsDate()
  date: string;
}
