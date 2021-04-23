import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepository } from './usuarios.repository';
import{ RolRepository } from '../rol/rol.repository';

@Module({
  imports:[TypeOrmModule.forFeature([ UsuarioRepository,RolRepository ])] ,
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
