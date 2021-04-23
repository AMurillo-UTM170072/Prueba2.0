import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER_PORT } from './configuration/constans';
import moment from 'moment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  const configservice=app.get(ConfigService);
  const moment=require ('moment')
  let now = moment().format('LTS');
  //server port 3000
  const port=+configservice.get<number>(SERVER_PORT) || 3000
  await app.listen(port);
  console.log('todo en orden listo para actuar señor ');
  console.log('recibiendo ordenes desde el puerto: ', port);
  console.log( 'la hora exacta es: ', now);
}
bootstrap();
