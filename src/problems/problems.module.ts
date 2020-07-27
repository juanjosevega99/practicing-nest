import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProblemSchema } from './schemas/problem.schema';
import { ProblemsController } from './problems.controller';
import { ProblemsService } from './problems.service';

import { AgentsModule } from 'src/agents/agents.module';
import { AgentsService } from 'src/agents/agents.service';
import { AgentSchema } from 'src/agents/schemas/agent.schema';

@Module({
  imports: [
    AgentsModule,
    MongooseModule.forFeature([
      { name: 'Problem', schema: ProblemSchema },
      { name: 'Agent', schema: AgentSchema }
    ])
  ],
  controllers: [ProblemsController],
  providers: [ProblemsService, AgentsService],
})
export class ProblemsModule {}
