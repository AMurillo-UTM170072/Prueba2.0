export class modeloReservacion{
    id?:number;
    Motivo:string;
    userId?:number;
    Dia:Date;
    HoraInicio:Date;
    HoraFin:Date;
    constructor(Motivo:string,userId:number,Dia:Date,HoraInicio:Date,HoraFin:Date){
        this.Motivo=Motivo;
        this.userId=userId;
        this.Dia=Dia;
        this.HoraInicio=HoraInicio;
        this.HoraFin=HoraFin;
    }
}
