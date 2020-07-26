import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { Agent } from './interfaces/agent.interface'
import { CreateAgentDTO } from './dto/create-agent.dto';

@Injectable()
export class AgentsService {

  constructor(@InjectModel('Agent') private agentModel: Model<Agent>) {}

  async assignProblem(): Promise<Agent> {
    const freeAgent  = await this.agentModel.findOne({ availability: true })
    return freeAgent
  }

}
