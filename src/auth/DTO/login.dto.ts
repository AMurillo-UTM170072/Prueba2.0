import { IsNotBlank } from "src/configuration/IsnotBlank.decorator";
 

export class LoginUsuarioDTO{
    @IsNotBlank({message:'el nombre del usuario  no debe de ir vacio'})
    NombreUsuario:string;

    @IsNotBlank({message:'la cotraseña no debe de ir vacia '})
    password:string;
}