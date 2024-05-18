import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardianController } from './guardian.controller';
import { GuardianService } from './guardian.service';
import { GuardianEntity } from "./guardian.entity";

@Module({
  imports: [TypeOrmModule.forFeature([GuardianEntity]),],
  controllers: [GuardianController],
  providers: [GuardianService],
})

export class GuardianModule {}
