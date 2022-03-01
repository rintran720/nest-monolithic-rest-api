import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.use(
    session({ secret: 'my-secret', resave: false, saveUninitialized: false }),
  );
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
