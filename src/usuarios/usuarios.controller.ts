import { Controller, Get, Param, 
    ParseIntPipe, Post,Body, UseGuards } from '@nestjs/common';
import { UsuarioDTO } from './DTO/usuarios.dto';
import { UsuariosService } from './usuarios.service';
import { RolNombre } from '../rol/rol.enum';
import { RolDecorator } from 'src/decorators/rol-decorator.decorator';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly servicioUsusario:UsuariosService ){}
    
    @RolDecorator(RolNombre.ADMIN, RolNombre.USER)
    @UseGuards()
    @Get()
    async getAll(){
        return await this.servicioUsusario.getAll();
    }

   @Get('/:id')
   async getOne(@Param('id', ParseIntPipe) id:number){
    return await this.servicioUsusario.getByOne(id);
   }
    @Post()
    create(@Body() dto:UsuarioDTO){
        return this.servicioUsusario.Guardar(dto);
    }
}


