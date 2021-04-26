import { BadRequestException, Injectable, InternalServerErrorException,
     NotFoundException, UnauthorizedException } from '@nestjs/common';
import { MessageDTO } from 'src/configuration/message.dto';
import { RolNombre } from 'src/rol/rol.enum';
import { UsuarioEntity } from 'src/usuarios/usuarios.entity';
import { LoginUsuarioDTO } from './DTO/login.dto';
import { NuevoUsuarioDto } from './DTO/usuario-nuevo.dto';
import { PayloadInterface } from './playload.interface';
import { compare } from  'bcryptjs';
import { AuthRepository } from './auth.repository';
import { RolRepository } from '../rol/rol.repository';
import { JwtService } from '@nestjs/jwt';
import { tokenDTO } from './DTO/token.dto'


@Injectable()
export class AuthService {
    constructor( private authRepository:AuthRepository,
        private rolRepository:RolRepository,
        private jwsService:JwtService ){}

    async getall(): Promise<UsuarioEntity[]> {
        const usuarios = await this.authRepository.find();
        if(!usuarios.length) throw new NotFoundException(new MessageDTO('no hay usuarios en la lista'));
        return usuarios;
    }
    /*
        el metodo de create se encarga de que no se puedan repetir los nombres de usuarios 
        comprobando de que los roles esten creados  para poder hacer una insercion a la tabla de usuarios
     */
    async create(dto: NuevoUsuarioDto ): Promise<any> {
        const {NombreUsuario, correo} = dto;
        const exists = await this.authRepository.findOne({where: [{NombreUsuario: NombreUsuario}, {correo: correo}]});
        if(exists) throw new BadRequestException(new MessageDTO('ese usuario ya existe'));
        const rolUser = await this.rolRepository.findOne({where: {rolNombre: RolNombre.USER }});
        if( !rolUser) throw new InternalServerErrorException(new MessageDTO('los roles aún no han sido creados'));
        const usuario = this.authRepository.create(dto);
        usuario.roles = [ rolUser];
        await this.authRepository.save(usuario);
        return new MessageDTO('usuario creado');
    }
    /*
        el metodo de login hace una consulta rapida para poder realizar la comparacion de los datos
        compara los datos si no lanza errores para que el usuario pueda corregir en el posteo de los datos
    */
    async login( DTO:LoginUsuarioDTO): Promise<any> {
        const {NombreUsuario} = DTO; 
        const usuario = await this.authRepository.findOne({where: [{NombreUsuario: NombreUsuario}, {correo: NombreUsuario}]});
        if(!usuario) return new UnauthorizedException(new MessageDTO('no existe en la base de datos'));
        const passWordOK=await compare(DTO.password,usuario.password);
        if(!passWordOK) return new UnauthorizedException(new MessageDTO('el password es incorrecto'));
        
        const payload: PayloadInterface ={
            id:usuario.id,
            NombreUsuario:usuario.NombreUsuario,
            correo:usuario.correo,
            roles:usuario.roles.map(rol=>rol.rolNombre as RolNombre)
        }
        const token= await this.jwsService.sign(payload);
        return {token}
    }
    //metodo que refresca el JWT para el usuario
    async refresh(dto: tokenDTO): Promise<any> {
        const usuario = await this.jwsService.decode(dto.token);
        const payload: PayloadInterface = {
            id: usuario[`id`],
            NombreUsuario: usuario[`NombreUsuario`],
            correo: usuario[`correo`],
            roles: usuario[`roles`]
        }
        const token = await this.jwsService.sign(payload);
        return {token};
    }
}

