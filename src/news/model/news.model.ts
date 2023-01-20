import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import { HydratedDocument} from 'mongoose';
import { Document } from 'mongoose';

@Schema()
export class News extends Document {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  url: string;

  @Prop()
  date: Date;
}

export const NewsSchema = SchemaFactory.createForClass(News);
