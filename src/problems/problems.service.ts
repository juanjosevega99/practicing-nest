import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { Problem } from './interfaces/problem.interface'
import { CreateProblemDTO } from './dto/create-problem.dto';

import { AgentsService } from 'src/agents/agents.service';
// private agentsService: AgentsService

@Injectable()
export class ProblemsService {

  constructor(
    @InjectModel('Problem')
    private problemModel: Model<Problem>,
    @InjectModel('Agent') private agentsService: AgentsService) {}

  async createProblem(createProblemDTO: CreateProblemDTO): Promise<Problem> {
    const problem = new this.problemModel(createProblemDTO)
    await problem.save()

    // await this.agentsService.assignProblem(problem._id)
    console.log(problem._id)

    return problem
  }

  async agentToProblem(problemID: string, agentAvailable: object): Promise<Problem> {
    const problemAssigned = await this.problemModel.findOneAndUpdate({ _id: problemID }, { $set: { agentId: agentAvailable } })

    // await this.problemModel.findOneAndUpdate({ _id: problemID }, { $push: { agentId:  } })
    // if ()

    return problemAssigned
  }

  async solvedProblem(problemID: string): Promise<Problem> {
    const problemSolved = await this.problemModel.findOneAndUpdate({ _id: problemID }, { $set: { solved: true } })

    // await this.agentsService.availabilityAgent(problemSolved.agentId)

    return problemSolved
  }

}
