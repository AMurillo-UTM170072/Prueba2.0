import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    correo: string;
    @Column({type:'varchar', nullable:false })
    password: string;
}