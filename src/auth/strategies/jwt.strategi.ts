import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioEntity } from "src/usuarios/usuarios.entity";
import { AuthRepository } from "../auth.repository";
import { ConfigService } from "@nestjs/config";
import { JWT_SECRET } from "src/configuration/constans";
import { PayloadInterface } from "../playload.interface";
import { MessageDTO } from "src/configuration/message.dto";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        private readonly authRepository: AuthRepository,
        private readonly configService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get(JWT_SECRET)
        });
    }

    async validate(payload: PayloadInterface) {
        const {NombreUsuario, correo} = payload;
        const usuario = await this.authRepository.findOne({where: [{NombreUsuario: NombreUsuario}, {correo: correo}]});
        if(!usuario) return new UnauthorizedException(new MessageDTO('credenciales erróneas'));
        return payload;
    }
}