import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly servicioUsusario:UsuariosService ){}
    
    @Get()
    async getAll(){
        return await this.servicioUsusario.getAll();
    }

   @Get('/:id')
   async getOne(@Param('id', ParseIntPipe) id:number){
    return await this.servicioUsusario.getByOne(id);
}

}

