import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { Problem } from './interfaces/problem.interface'
import { CreateProblemDTO } from './dto/create-problem.dto';

@Injectable()
export class ProblemsService {

  constructor(@InjectModel('Problem') private problemModel: Model<Problem>) {}

  async createProblem(createProblemDTO: CreateProblemDTO): Promise<Problem> {
    const problem = new this.problemModel(createProblemDTO)
    return await problem.save()
  }

}
