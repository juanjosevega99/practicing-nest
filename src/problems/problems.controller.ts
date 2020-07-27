import { Controller, Post, Res, Body, HttpStatus, Get, Param } from '@nestjs/common';

import { CreateProblemDTO } from './dto/create-problem.dto'
import { ProblemsService } from './problems.service'

@Controller('problems')
export class ProblemsController {

  constructor(private problemsService:ProblemsService) {}

  @Post('/create')
  async createProblem(@Res() res, @Body() createProblemDTO: CreateProblemDTO) {
    const problem = await this.problemsService.createProblem(createProblemDTO)
    return res.status(HttpStatus.CREATED).json({
      message: 'Problem Successfully Created',
      problem
    })
  }

  @Get('/solved/:problemID')
  async solvedProblem(@Res() res, @Param('problemID') problemID) {
    const problemSolved= await this.problemsService.solvedProblem(problemID)
    return res.status(HttpStatus.OK).json({
      message: 'Problem Successfully Solved',
      problemSolved
    })
  }

}
