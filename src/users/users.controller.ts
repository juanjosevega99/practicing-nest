import { Controller, Post, Res, Body } from '@nestjs/common';

import { CreateUserDTO } from './dto/create-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  // @Post('/problem')
  // async createProblem(@Res() res, @Body() createUserDTO: CreateUserDTO) {
  //   const problem = await this.usersService
  // }

}
