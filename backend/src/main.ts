import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Enable CORS to handle preflight OPTIONS requests from your frontend
  app.enableCors({
    origin: 'http://localhost:3000', // Your Next.js development server URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // 2. Set the global prefix for your API endpoints
  app.setGlobalPrefix('api');

  // 3. Listen on the environment port or fall back to 1111
  await app.listen(process.env.PORT ?? 1111);
}
bootstrap();