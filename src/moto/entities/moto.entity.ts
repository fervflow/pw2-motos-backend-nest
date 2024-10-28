import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('motocicletas')
export class Moto {
  @ObjectIdColumn()
  _id: ObjectId;
  @Column()
  nombre_conductor: string;
  @Column()
  modelo: string;
  @Column()
  marca: string;
  @Column()
  placa: string;
  @Column()
  ubicacion: string;
}
