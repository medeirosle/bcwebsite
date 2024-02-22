import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ShowDocument = HydratedDocument<Show>;

@Schema()
export class Show {
  @Prop()
  dateTime: Date;

  @Prop()
  title: string;

  @Prop()
  place: string;

  @Prop()
  comments: string;
  
  @Prop()
  visible: boolean;
}

export const ShowSchema = SchemaFactory.createForClass(Show);