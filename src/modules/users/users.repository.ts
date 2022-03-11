import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  // findOneByEmail(email: string): Promise<UserEntity> {
  //   return this.findOne({email});
  // }
}
