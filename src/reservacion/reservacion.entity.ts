import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioEntity } from '../usuarios/usuarios.entity';

@Entity({name:'reservacion'})
export class ReservacionEntity{
    @PrimaryGeneratedColumn('increment')
    id:number   
    @Column({type:'varchar',length:30,nullable:false})
    Motivo:string;
    @Column({type:'time'})
    HoraInicio:Date;
    @Column({type:'date'})
    Dia:Date;
    @Column({type:'time'})
    HoraFin:Date;
    
    @ManyToOne(type=> UsuarioEntity , user=> user.reservacion)
    user:UsuarioEntity;
   
}