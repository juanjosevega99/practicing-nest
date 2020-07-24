import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentsController } from './agents/agents.controller';
import { AgentsService } from './agents/agents.service';
import { AgentsModule } from './agents/agents.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AgentsModule, UsersModule],
  controllers: [AppController, AgentsController, UsersController],
  providers: [AppService, AgentsService, UsersService],
})
export class AppModule {}
