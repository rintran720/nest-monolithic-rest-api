import {
  BaseEntity as OrmEntity,
  CreateDateColumn,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity extends OrmEntity {
  @ObjectIdColumn()
  _id: string;

  @UpdateDateColumn()
  updated_at?: Date;

  @CreateDateColumn()
  created_at?: Date;

  deleted?: boolean = false;

  // @VersionColumn()
  // version?: number = null;
}
