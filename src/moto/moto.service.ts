import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMotoDto } from './dto/create-moto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Moto } from './entities/moto.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class MotoService {
  constructor(
    @InjectRepository(Moto)
    private readonly motoRepository: Repository<Moto>,
  ) {}

  async create(moto: CreateMotoDto) {
    const motoData = { ...moto };
    delete motoData._id;
    const newMoto = await this.motoRepository.save(motoData);
    console.log('FROM: moto.service:create:', motoData);
    console.log('newMoto:', newMoto);
    return newMoto;
  }

  async findAll() {
    console.log('findAll() executed');
    return this.motoRepository.find();
  }

  async findOne(id: string) {
    const moto = await this.motoRepository.findOneBy({ _id: new ObjectId(id) });
    if (!moto) {
      throw new NotFoundException(`Moto with id: ${id} not found.`);
    }
    return moto;
  }

  async update(id: string, motoUpdate: Partial<CreateMotoDto>) {
    delete motoUpdate._id;
    const moto = await this.findOne(id);
    Object.assign(moto, motoUpdate);
    return this.motoRepository.save(moto);
  }

  async remove(id: string) {
    return this.motoRepository.delete(id);
  }
}
