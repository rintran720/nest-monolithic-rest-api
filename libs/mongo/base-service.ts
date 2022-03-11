import { DeepPartial, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { EntityId } from 'typeorm/repository/EntityId';
import { BaseEntity } from '../mongo/entities/base-entity';
import { IBaseService } from './ibase-service';

export class BaseService<T extends BaseEntity, R extends Repository<T>>
  implements IBaseService<T>
{
  protected readonly repository: R;

  constructor(repository: R) {
    this.repository = repository;
  }

  findAll(): Promise<T[]> {
    return this.repository.find();
  }

  findById(id: EntityId): Promise<T> {
    return this.repository.findOne(id);
  }

  create(data: DeepPartial<T>): Promise<T> {
    return this.repository.save(data);
  }

  update(id: EntityId, data: QueryDeepPartialEntity<T>): Promise<UpdateResult> {
    return this.repository.update(id, data);
  }

  delete(id: EntityId): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
