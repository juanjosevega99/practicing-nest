import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentsController } from './agents/agents.controller';
import { AgentsService } from './agents/agents.service';
import { AgentsModule } from './agents/agents.module';

@Module({
  imports: [AgentsModule],
  controllers: [AppController, AgentsController],
  providers: [AppService, AgentsService],
})
export class AppModule {}
