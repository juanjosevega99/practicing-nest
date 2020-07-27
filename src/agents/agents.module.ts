import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentSchema } from './schemas/agent.schema';
import { AgentsController } from './agents.controller';
import { AgentsService } from './agents.service';

import { ProblemsModule } from 'src/problems/problems.module';
import { ProblemsService } from 'src/problems/problems.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Agent', schema: AgentSchema }
    ])
  ],
  controllers: [AgentsController],
  providers: [AgentsService],
})
export class AgentsModule {}
