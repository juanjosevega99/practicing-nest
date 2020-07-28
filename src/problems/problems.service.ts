import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { Problem } from './interfaces/problem.interface'
import { CreateProblemDTO } from './dto/create-problem.dto';

import { Agent } from '../agents/interfaces/agent.interface'

@Injectable()
export class ProblemsService {

  constructor(
    @InjectModel('Problem') private problemModel: Model<Problem>,
    @InjectModel('Agent') private agentModel: Model<Agent>) {}

  async createProblem(createProblemDTO: CreateProblemDTO): Promise<Problem> {
    const problem = new this.problemModel(createProblemDTO)
    await problem.save()
    
    // assignProblem
    const freeAgent  = await this.agentModel.findOneAndUpdate({ availability: true }, { $set: { availability: false } })
    if (freeAgent) {
      await this.agentToProblem(problem._id, freeAgent.id)
    }

    return problem
  }

  async listProblems(): Promise<Problem[]> {
    const problems = await this.problemModel.find()
    return problems
  }

  async agentToProblem(problemID: string, agentAvailable: object): Promise<Problem> {
    const problemAssigned = await this.problemModel.findOneAndUpdate({ _id: problemID }, { $set: { agentId: agentAvailable } })
    return problemAssigned
  }
  
  async solvedProblem(problemID: string): Promise<Problem> {
    const problemSolved = await this.problemModel.findOneAndUpdate({ _id: problemID }, { $set: { solved: true } })
    
    //availabilityAgent
    const xd = await this.agentModel.findOneAndUpdate({ _id: problemSolved.agentId }, { $set: { availability: true } })
    await this.agentlessProblem(xd)

    return problemSolved
  }
  
  //problem sin agent
  async agentlessProblem(agent: object): Promise<Problem> {
    const problemAssigned = await this.problemModel.findOneAndUpdate({ solved: false, agentId: null }, { $set: { agentId: agent } })
    if (problemAssigned) {
      await this.availabilityAgent(agent)
      return problemAssigned
    }
  }

  async availabilityAgent(agentId: object): Promise<Agent> {
    const xd = await this.agentModel.findOneAndUpdate({ _id: agentId }, { $set: { availability: false } })
    return xd
  }
  
}
