import { EntityId } from 'typeorm/repository/EntityId';

export class BaseDto {
  _id: EntityId;
  createdAt: Date | string;
  updatedAt: Date | string;

  // constructor(entity: BaseEntity) {
  //   this._id = entity._id;
  //   this.createdAt = entity.createdAt;
  //   this.updatedAt = entity.updatedAt;
  // }
}
