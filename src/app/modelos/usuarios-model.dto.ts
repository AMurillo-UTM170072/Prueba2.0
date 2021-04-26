export class UsuariosModel{
    id?:number;
    Nombre:string;
    ApPaterno:string;
    ApMaterno:string;
    telefono:number;
    NombreUsuario:string;
    correo:string;
    constructor(Nombre:string,ApPaterno:string,ApMaterno:string,telefono:number,NombreUsuario:string,correo:string){
        this.Nombre=Nombre;
        this.ApPaterno=ApPaterno;
        this.ApMaterno=ApMaterno;
        this.telefono=telefono;
        this.NombreUsuario=NombreUsuario;
        this.correo=correo;
    }
}