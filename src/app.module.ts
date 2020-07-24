import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentsController } from './agents/agents.controller';
import { AgentsService } from './agents/agents.service';
import { AgentsModule } from './agents/agents.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ProblemsController } from './problems/problems.controller';
import { ProblemsService } from './problems/problems.service';
import { ProblemsModule } from './problems/problems.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    AgentsModule, 
    UsersModule,
    ProblemsModule,
    MongooseModule.forRoot('mongodb+srv://db_user_platzivideos:rompiendola.desde.l9l9@cluster0-f0pdk.mongodb.net/alexa?retryWrites=true&w=majority')
  ],
  controllers: [AppController, AgentsController, UsersController, ProblemsController],
  providers: [AppService, AgentsService, UsersService, ProblemsService],
})
export class AppModule {}
