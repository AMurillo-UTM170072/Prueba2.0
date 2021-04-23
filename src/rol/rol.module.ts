import { Module } from '@nestjs/common';
import { RolController } from './rol.controller';

@Module({
  controllers: [RolController]
})
export class RolModule {}
