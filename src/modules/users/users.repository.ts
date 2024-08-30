import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private usersOrmRepository: Repository<User>,
  ) {}
  async save(user: User): Promise<User> {
    const result = await this.usersOrmRepository.save(user);

    return result;
  }

  findByEmail(email: string) {
    return this.usersOrmRepository.findOneBy({ email });
  }

  findById(id: number) {
    return this.usersOrmRepository.findOneBy({ id });
  }
}
