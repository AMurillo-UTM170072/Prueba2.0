import { Module } from '@nestjs/common';
import { RolController } from './rol.controller';
import { RolService } from './rol.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolRepository } from './rol.repository';

@Module({
  imports:[TypeOrmModule.forFeature([RolRepository]) ],
  controllers: [RolController],
  providers:[ RolService ]
})
export class RolModule {}
