import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MessageDTO } from 'src/configuration/message.dto';
import { RolEntity } from './rol.entity';
import { RolRepository } from './rol.repository';
import { CreateRolDto } from './DTO/create-rol.dto';
@Injectable()
export class RolService {
    constructor(
        private  rolRepository: RolRepository
    ) {}
    // metodo que busca a los roles en la base de datos
    async getall(): Promise<RolEntity[]> {
        const roles = await this.rolRepository.find();
        if(!roles.length) throw new NotFoundException(new MessageDTO('no hay roles en la lista'));
        return roles;
    }
    //metodo para guardar el rol 
    async create(dto: CreateRolDto): Promise<any> {
        const exists = await this.rolRepository.findOne({where: {rolNombre: dto.rolNombre}});
        if(exists) throw new BadRequestException(new MessageDTO('ese rol ya existe'));
        await this.rolRepository.save(dto as RolEntity);
        return new MessageDTO('rol creado');
    }
}
