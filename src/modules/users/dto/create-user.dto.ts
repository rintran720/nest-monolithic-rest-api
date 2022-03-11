import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from '../../../../libs/mongo/dtos';

export class CreateUserDto extends BaseDto {
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  lastname: string;
}
