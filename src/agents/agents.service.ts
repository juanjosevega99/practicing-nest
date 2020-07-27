import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { Agent } from './interfaces/agent.interface'
import { CreateAgentDTO } from './dto/create-agent.dto';

import { ProblemsService } from 'src/problems/problems.service';
// import { Problem } from 'src/problems/interfaces/problem.interface'
// import { ProblemsModule } from 'src/problems/problems.module'

// import { AgentsModule } from 'src/agents/agents.module'
// , private problemsService: ProblemsService

@Injectable()
export class AgentsService {

  constructor(@InjectModel('Agent') private agentModel: Model<Agent>) {}

  async assignProblem(problemId: string): Promise<Agent> {
    const freeAgent  = await this.agentModel.findOneAndUpdate({ availability: true }, { $set: { availability: false } })
    const agentAvailable = freeAgent._id

    // await this.problemsService.agentToProblem(problemId, agentAvailable)
    // await this.agentModel.findOneAndUpdate({ _id: agentId }, { $set: { availability: true } })
    // await this.agentsModule.
    return freeAgent
  }

  async availabilityAgent(agentId: object): Promise<Agent> {
    await this.agentModel.findOneAndUpdate({ _id: agentId }, { $set: { availability: true } })

    // await this.agentModel.findOneAndUpdate({ _id: agentId }, { $set: { availability: true } })

    return 
  }

}
