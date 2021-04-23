import { Module } from '@nestjs/common';
import { ReservacionService } from './reservacion.service';
import { ReservacionController } from './reservacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservacionRepository } from './reservacion.respository';

@Module({
  imports:[TypeOrmModule.forFeature([ReservacionRepository])],
  providers: [ReservacionService],
  controllers: [ReservacionController]
})
export class ReservacionModule {}
