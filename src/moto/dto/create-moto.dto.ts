import { IsIn, IsOptional, Length } from 'class-validator';
import { Location, LOCATIONS } from 'src/types/location';
// import { Transform } from 'class-transformer';

export class CreateMotoDto {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @Transform(({ value }) => undefined, { toClassOnly: true })
  // _id?: never; // Mark as `never` to prevent _id from being allowed in the DTO
  // @Length(3, 64)
  @IsOptional()
  _id?: string;
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
