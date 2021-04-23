import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UsuarioRepository } from './usuarios.repository';
import { UsuarioEntity } from './usuarios.entity';
import { MessageDTO } from 'src/configuration/message.dto';
import { UsuarioDTO } from './DTO/usuarios.dto';
import { RolNombre } from '../rol/rol.enum';
import { RolRepository } from '../rol/rol.repository';
import { InjectRepository } from '@nestjs/typeorm';
import {RolEntity} from '../rol/rol.entity'

@Injectable()
export class UsuariosService {
    constructor(
       // @InjectRepository(UsuarioEntity)
        private usuarioRepository: UsuarioRepository,
      // @InjectRepository(RolEntity)
        private rolRepository: RolRepository
        ) {}
    // para obtener  todos los usuarios de una sola vez
    async getAll():Promise<UsuarioEntity[]>{
        const usuarios = await this.usuarioRepository.find();
        if(!usuarios.length) throw new NotFoundException(new MessageDTO('no hay usuarios en la lista'));
        return usuarios;
    }
    async getByOne(id:number):Promise<UsuarioEntity>{
        const producto = await this.usuarioRepository.findOne(id);
        if(!producto){
            throw new NotFoundException( new MessageDTO(' no existe el usuario con esos datos '));
        } 
        return producto;
    }
    //metodo para crear a un administrador por medio de postman
    async Guardar(dto: UsuarioDTO ){
        const {correo}= dto;
        const exist = await this.usuarioRepository.findOne({where:[{correo:correo}]});
        if(exist) throw new BadRequestException(new MessageDTO('este correo ya esta registrado'));
        const rolAdmin= await this.rolRepository.findOne({where:{rolNombre: RolNombre.ADMIN }});
        const rolUser= await this.rolRepository.findOne({where:{rolNombre: RolNombre.USER }});
        if(!rolAdmin || !rolUser ) throw new InternalServerErrorException(new MessageDTO('los roles aún no son creados'));
        const admin =this.usuarioRepository.create(dto);
        admin.roles=[ rolAdmin,rolUser ];
        await this.usuarioRepository.save(admin);
        return new MessageDTO('administrador creado');
    }

}
