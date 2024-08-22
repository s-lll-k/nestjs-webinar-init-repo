import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async registerUser(dto: RegisterUserDto): Promise<number> {
    const user = new User();
    user.age = dto.age;
    user.email = dto.email;
    user.name = dto.name;
    user.password = dto.password;

    const createdUser = await this.usersRepository.save(user);

    return createdUser.id;
  }
}
