import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { User } from './interfaces/user.interface'
import { CreateUserDTO } from './dto/create-user.dto'

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private userModel: Model<User>) {}

}
