import { RolNombre } from './rol.enum';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioEntity } from 'src/usuarios/usuarios.entity';

//creacion de tabla de roles para poder separar a los usuarios
@Entity({name: 'rol'})
export class RolEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 10, nullable: false, unique: true})
    rolNombre: RolNombre;
    usuarios: UsuarioEntity[];

}