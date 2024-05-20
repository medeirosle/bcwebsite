import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop()
  email: string

  @Prop()
  hash: string

  @Prop()
  salt: string

  @Prop()
  name: string

  @Prop()
  active: boolean

  @Prop()
  isAdmin: boolean
}

export const UserSchema = SchemaFactory.createForClass(User)
