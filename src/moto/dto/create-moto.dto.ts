import { IsIn, Length } from 'class-validator';
import { Location, LOCATIONS } from 'src/types/location';

export class CreateMotoDto {
  @Length(3, 64)
  nombre_conductor: string;
  @Length(3, 64)
  marca: string;
  @Length(1, 64)
  modelo: string;
  @Length(3, 12)
  placa: string;
  @IsIn(LOCATIONS, {
    message: `Location must be in one of the following: ${LOCATIONS.join(', ')}`,
  })
  ubicacion: Location;
}
