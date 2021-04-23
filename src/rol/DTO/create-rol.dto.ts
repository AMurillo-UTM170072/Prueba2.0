import { IsEnum } from "class-validator";
import { RolNombre } from "../rol.enum";

export class CreateRolDto {
    //elavoracion de validador de roles unicos
    @IsEnum(RolNombre, {message: 'el rol sólo puede ser user o admin'})
    rolNombre: string;
}