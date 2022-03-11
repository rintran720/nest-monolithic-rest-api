import { Expose } from 'class-transformer';
import { IsString, Length } from 'class-validator';
import { BaseEntity } from 'libs/mongo/entities/base-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Length(1, 40)
  @IsString()
  @Expose()
  @Column()
  firstname: string;

  @Length(1, 40)
  @IsString()
  @Expose()
  @Column()
  lastname: string;

  @Length(1, 40)
  @IsString()
  @Expose()
  @Column()
  username: string;

  @Expose()
  @Column()
  deactivated?: boolean = false;

  @Expose()
  @Column()
  email: {
    address: string;
    verified?: boolean;
    verificationCode: string;
  };
}
