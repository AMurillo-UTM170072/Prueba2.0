import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from './configuration/constans';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolService } from './rol/rol.service';
import { RolModule } from './rol/rol.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ ConfigModule.forRoot({ 
    envFilePath:'.env',
    isGlobal:true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_NAME),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging:false,
      }),
      inject: [ConfigService],
    }),
    UsuariosModule,
    RolModule,
    AuthModule,
   ],
  controllers: [AppController],
  providers: [AppService, RolService],
})
export class AppModule {}
