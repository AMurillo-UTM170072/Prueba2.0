import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolDecorator } from 'src/decorators/rol-decorator.decorator';
import { RolNombre } from 'src/rol/rol.enum';
import { ReservacionService } from './reservacion.service';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { RolesGuard } from '../guards/rol.guard';

@Controller('reservacion')
export class ReservacionController {
    constructor( private readonly servicoreservacion:ReservacionService ){}
    @RolDecorator(RolNombre.ADMIN,RolNombre.USER)
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Get()
    async getAll(){
        return await this.servicoreservacion.GetAll();
    } 
}
