import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MotoService } from './moto.service';
import { CreateMotoDto } from './dto/create-moto.dto';

@Controller('moto')
export class MotoController {
  constructor(private readonly motoService: MotoService) {}

  @Post()
  create(@Body() createMotoDto: CreateMotoDto) {
    return this.motoService.create(createMotoDto);
  }

  @Get()
  findAll() {
    return this.motoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() motoUpdate: Partial<CreateMotoDto>) {
    return this.motoService.update(id, motoUpdate);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motoService.remove(id);
  }
}
