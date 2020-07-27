import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { Agent } from './interfaces/agent.interface'
import { CreateAgentDTO } from './dto/create-agent.dto';

import { ProblemsService } from 'src/problems/problems.service';

@Injectable()
export class AgentsService {

  constructor(
    @InjectModel('Agent') private agentModel: Model<Agent>,
    @InjectModel('Problem') private problemsService: ProblemsService) {}

  async assignProblem(problemId: object): Promise<Agent> {
    const freeAgent  = await this.agentModel.findOneAndUpdate({ availability: true }, { $set: { availability: false } })
    const agentAvailable = freeAgent._id
    return freeAgent
  }

  async availabilityAgent(agentId: object): Promise<Agent> {
    const xd = await this.agentModel.findOneAndUpdate({ _id: agentId }, { $set: { availability: true } })
    return xd
  }

}
