import { IsEmail, IsString, MaxLength } from "class-validator";
import { IsNotBlank } from "src/configuration/IsnotBlank.decorator";

export class NuevoUsuarioDto {

    @IsString()
    @MaxLength(10, {message: 'nombre: longitud máxima de 10'})
    Nombre: string;

    @IsNotBlank({message: 'el nombre de usuario no puede estar vacío'})
    @MaxLength(10, {message: 'nombre de usuario: longitud máxima de 10'})
    NombreUsuario: string;

    @IsEmail()
    correo: string;

    @IsNotBlank({message: 'la contraseña del usuario no puede estar vacía'})
    password: string;
}