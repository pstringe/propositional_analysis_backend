import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const whitelist = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:3003',
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: whitelist, credentials: true });
  await app.listen(8080);
}
bootstrap();
