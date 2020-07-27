import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentSchema } from './schemas/agent.schema';
import { AgentsController } from './agents.controller';
import { AgentsService } from './agents.service';

import { ProblemSchema } from 'src/problems/schemas/problem.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Agent', schema: AgentSchema },
      { name: 'Problem', schema: ProblemSchema },
    ])
  ],
  controllers: [AgentsController],
  providers: [AgentsService],
  exports: [AgentsService]
})
export class AgentsModule {}
