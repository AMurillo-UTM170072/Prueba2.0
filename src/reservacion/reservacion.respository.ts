import { EntityRepository,Repository } from "typeorm";
import { ReservacionEntity } from './reservacion.entity';

@EntityRepository(ReservacionEntity)
export class ReservacionRepository extends Repository<ReservacionEntity> {}