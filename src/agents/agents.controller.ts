import { Controller, Get, Res, Body, HttpStatus, Post } from '@nestjs/common';

import { CreateAgentDTO } from './dto/create-agent.dto'
import { AgentsService } from './agents.service'

@Controller('agents')
export class AgentsController {

  constructor(private agentsService: AgentsService) {}

  @Get('/')
  async assignProblem(@Res() res) {
    const problemAssign = await this.agentsService.assignProblem()
    return res.status(HttpStatus.CREATED).json({
      message: 'Problem Successfully Assigned',
      problemAssign
    })
  }

}
