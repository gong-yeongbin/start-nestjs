import { IsNumber } from 'class-validator';

export class LocationDto {
  @IsNumber()
  readonly latitude: number;

  @IsNumber()
  readonly longitude: number;
}
