import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepository } from './usuarios.repository';

@Module({
  imports:[TypeOrmModule.forFeature([ UsuarioRepository ])] ,
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
