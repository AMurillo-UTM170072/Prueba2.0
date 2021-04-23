import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { RolService } from './rol.service';
import {  CreateRolDto  } from './DTO/create-rol.dto'

@Controller('rol')
export class RolController {
    
    constructor(private readonly rolService: RolService) {}
    //obtencion de todos los roles
    @Get()
    getAll() {
        return this.rolService.getall();
    }
    // integrando los roles a la base de datos
    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    create(@Body() dto: CreateRolDto) {
        return this.rolService.create(dto);
    }
}
