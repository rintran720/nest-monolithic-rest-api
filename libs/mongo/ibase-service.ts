import { DeepPartial, DeleteResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { EntityId } from 'typeorm/repository/EntityId';

export interface IBaseService<T> {
  findAll(): Promise<T[]>;
  findById(id: EntityId): Promise<T>;
  create(data: DeepPartial<T>): Promise<T>;
  update(id: EntityId, data: QueryDeepPartialEntity<T>): Promise<T>;
  delete(id: EntityId): Promise<DeleteResult>;
}
