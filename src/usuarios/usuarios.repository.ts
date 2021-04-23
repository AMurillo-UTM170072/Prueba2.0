import { EntityRepository, Repository } from "typeorm";
import { UsuarioEntity } from './usuarios.entity';

@EntityRepository(UsuarioEntity)
export class UsuarioRepository extends Repository<UsuarioEntity> {}