import { ObjectId } from 'mongodb';
import { Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryColumn()
  @ObjectIdColumn()
  _id?: ObjectId | string;
}
