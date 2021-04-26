import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JWT_SECRET } from 'src/configuration/constans';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategi';
import { RolRepository } from '../rol/rol.repository';
import { AuthRepository } from './auth.repository';
import { UsuarioRepository } from '../usuarios/usuarios.repository';

@Module({imports:[  // inyeccion de los repositorios 
  TypeOrmModule.forFeature([ RolRepository,AuthRepository,UsuarioRepository ]),
  PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    // metodo de configuracion de la clave secreta
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get(JWT_SECRET),
        signOptions: {
          expiresIn: 20
        }
      }),
      inject: [ConfigService],
    }),
],
  providers:[AuthService, ConfigService,JwtStrategy],
  controllers:[AuthController],
  exports:[ PassportModule,JwtStrategy ],

})
export class AuthModule {}
