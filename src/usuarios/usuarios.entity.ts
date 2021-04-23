import { RolEntity } from "src/rol/rol.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {  hash   } from 'bcryptjs';
import { ReservacionEntity } from '../reservacion/reservacion.entity';

//la propiedad de synchronize evita que se sobreescriba toda la tabla 
@Entity({name:'Usuarios',synchronize:false})
export class UsuarioEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({type:'varchar',length:20, unique:true,nullable:false })
    Nombre: string;
    @Column({type:'varchar',length:20, nullable:false })
    ApPaterno: string;
    @Column({type:'varchar',length:20, nullable:false })
    ApMaterno: string;
    @Column({type:'int' })
    telefono: number;
    @Column({type:'varchar',length:20,unique:true, nullable:false })
    NombreUsuario: string;
    @Column({type:'varchar',length:20,unique:true, nullable:false })
    correo: string;
    @Column({type:'varchar', nullable:false })
    password: string;

    @OneToMany(type=> ReservacionEntity , reservacion=> reservacion.user )
    reservacion: ReservacionEntity[]

    @ManyToMany(type => RolEntity, rol => rol.usuarios , {eager: true})
    @JoinTable({
        name: 'usuario_rol',
        joinColumn: {name: 'usuario_id'},
        inverseJoinColumn: {name: 'rol_id'}
    })
    roles: RolEntity[];

    @BeforeInsert()
    @BeforeUpdate()
    async hashPasword() {
        if(!this.password) return;
        this.password = await hash(this.password, 10);
    }
}