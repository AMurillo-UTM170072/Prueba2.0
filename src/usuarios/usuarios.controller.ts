import { Controller, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly servicioUsusario:UsuariosService ){}
    
    @Get()
    async getAll(){
        return await this.servicioUsusario.getAll();
    }
   
}
