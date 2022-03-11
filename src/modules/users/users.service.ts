import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../libs/mongo/base-service';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService extends BaseService<UserEntity, UserRepository> {
  constructor(userRepository: UserRepository) {
    super(userRepository);
  }
}
