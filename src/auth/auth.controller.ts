import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUsuarioDTO } from './DTO/login.dto';
import { NuevoUsuarioDto } from './DTO/usuario-nuevo.dto';

@Controller('auth')
export class AuthController {
     // inicializacion de autorizacion en el controlador
     constructor(private readonly identificacionService: AuthService){}
     //Get todos los registros
     @Get()
     getAll() {
         return this.identificacionService.getall();
     }
     //crear un nuevo usuario
     @UsePipes(new ValidationPipe({whitelist: true}))
     @Post('nuevo')
     create(@Body() dto: NuevoUsuarioDto) {
         return this.identificacionService.create(dto);
     }
     //modificar al usuario
     @UsePipes(new ValidationPipe({whitelist: true}))
     @Post('login')
     login(@Body() dto: LoginUsuarioDTO) {
         return this.identificacionService.login(dto);
     }
}
