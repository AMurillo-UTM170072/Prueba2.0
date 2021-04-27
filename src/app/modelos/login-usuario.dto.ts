export class LoginUsuarioDto {
    //declaracion de variables para usuar en el componente
    NombreUsuario: string;
    password: string;
    //en el constructor se declaran e inicializan variables
    constructor(NombreUsuario: string, password: string) {
            this.NombreUsuario = NombreUsuario;
            this.password = password;
        }
    }