import { Module } from '@nestjs/common';
import { MotoService } from './moto.service';
import { MotoController } from './moto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moto } from './entities/moto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Moto])],
  controllers: [MotoController],
  providers: [MotoService],
  exports: [MotoService],
})
export class MotoModule {}
