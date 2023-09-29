import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Heza')
    .setDescription('The Heza API description')
    .setVersion('1.0')
    .addTag('Heza')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    transform:true,
    transformOptions:{
      enableImplicitConversion:true,
    }
  }))
  await app.listen(port, "0.0.0.0");
}
bootstrap();
