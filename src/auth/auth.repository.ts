import { UsuarioEntity } from "src/usuarios/usuarios.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(UsuarioEntity)
export class AuthRepository extends Repository<UsuarioEntity> {}