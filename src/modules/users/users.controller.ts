import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('registration')
  registerUser(@Body() dto: RegisterUserDto) {
    return this.userService.registerUser(dto);
  }
}
