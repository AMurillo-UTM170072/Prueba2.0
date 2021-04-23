import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioRepository } from './usuarios.repository';
import { UsuarioEntity } from './usuarios.entity';
import { MessageDTO } from 'src/configuration/message.dto';

@Injectable()
export class UsuariosService {
    constructor(private usuarioRepository: UsuarioRepository) {}
    // para obtener  todos los usuarios de una sola vez
    async getAll():Promise<UsuarioEntity[]>{
        const usuarios = await this.usuarioRepository.find();
        if(!usuarios.length) throw new NotFoundException(new MessageDTO('no hay usuarios en la lista'));
        return usuarios;
    }
}
