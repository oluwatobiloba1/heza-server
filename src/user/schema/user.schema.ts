import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Roles } from '../roles/roles';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = HydratedDocument<User>;

@Schema({"toJSON":{getters:true}, "toObject":{getters:true}})
export class User{
  @Prop()
  firstname: string

  @Prop()
  lastname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  DOB: Date;

  @Prop({enum: Roles, default: Roles.PATIENT})
  role: string;

  @Prop()
  phonenumber: string;

  @Prop({required:false})
  imageUrl: string;
}

export const UserSchemas = SchemaFactory.createForClass(User);