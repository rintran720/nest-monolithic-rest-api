import {
  BaseEntity as OrmEntity,
  CreateDateColumn,
  DeleteDateColumn,
  ObjectIdColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';

export abstract class BaseEntity extends OrmEntity {
  @ObjectIdColumn()
  _id: EntityId;

  createdBy?: EntityId;

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

  @DeleteDateColumn()
  deletedAt?: Date = null;

  deleted?: boolean = false;

  @VersionColumn()
  version?: number = null;
}
