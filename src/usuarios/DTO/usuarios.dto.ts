import {  IsInt,Max,IsString,IsEmail, MaxLength  } from 'class-validator'
import { IsNotBlank } from "src/configuration/IsnotBlank.decorator";

export class UsuarioDTO{
    @IsString()
    @IsNotBlank({message:'el nombre de usuario no puede estar vacío'})
    Nombre:string;
    @IsString()
    @IsNotBlank({message:'el apellido no puede estar vacío'})
    ApPaterno:string;
    @IsString()
    ApMaterno?:string;
    @IsInt()
    @Max(10)
    telefono: number;
    @IsNotBlank({message: 'el nombre de usuario no puede estar vacío'})
    @MaxLength(10, {message: 'nombre de usuario: longitud máxima de 10'})
    NombreUsuario: string;
    @IsEmail()
    correo:string;
    @IsNotBlank({message: 'la contraseña del usuario no puede estar vacía'})
    password: string;
}
