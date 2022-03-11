import {
  BaseEntity as OrmEntity,
  CreateDateColumn,
  ObjectIdColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export abstract class BaseEntity extends OrmEntity {
  @ObjectIdColumn()
  _id: string;

  @CreateDateColumn({
    default: `now()`,
    // nullable: true,
  })
  createdAt?: Date;

  @UpdateDateColumn({
    default: `now()`,
    // nullable: true,
  })
  updatedAt?: Date;

  deleted?: boolean = false;

  @VersionColumn()
  version?: number = null;
}
