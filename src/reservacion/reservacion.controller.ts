import { Controller, Get } from '@nestjs/common';
import { ReservacionService } from './reservacion.service';

@Controller('reservacion')
export class ReservacionController {
    constructor( private readonly servicoreservacion:ReservacionService ){}

    @Get()
    async getAll(){
        return await this.servicoreservacion.GetAll();
    } 
}
