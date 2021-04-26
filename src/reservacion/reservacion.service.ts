import { Injectable, NotFoundException } from '@nestjs/common';
import { ReservacionEntity } from './reservacion.entity';
import { ReservacionRepository } from './reservacion.respository';
import { MessageDTO } from '../configuration/message.dto';

@Injectable()
export class ReservacionService {
    constructor( private  reservacionR: ReservacionRepository  ){

    }
    async GetAll():Promise<ReservacionEntity[]>{
        const reservasciones= await this.reservacionR.find()
        if(!reservasciones.length )  throw new  NotFoundException(new  MessageDTO('no hay eventos programados'))
        return reservasciones;
    }

}
