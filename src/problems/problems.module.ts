import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProblemSchema } from './schemas/problem.schema';
import { ProblemsController } from './problems.controller';
import { ProblemsService } from './problems.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Problem', schema: ProblemSchema }
    ])
  ],
  controllers: [ProblemsController],
  providers: [ProblemsService]
})
export class ProblemsModule {}
