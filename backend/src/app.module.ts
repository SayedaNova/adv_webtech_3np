import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { St_GuardianModule } from './st_guardian/st_guardian.module';
import { AuthModule } from './st_guardian/auth/auth.module';




@Module(
  
  {
  imports: [St_GuardianModule, TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'nova',
    database: 'nova',//Change to your database name
    autoLoadEntities: true,
    synchronize: true,
    } ), AuthModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
