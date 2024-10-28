import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotoModule } from './moto/moto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'motorcycles_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // caution in prod
    }),
    MotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
