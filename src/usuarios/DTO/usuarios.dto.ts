import {  IsInt,Max,IsString,IsEmail  } from 'class-validator'
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

    @IsEmail()
    email:string;
}
