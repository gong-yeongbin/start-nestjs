import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import { LocationDto } from './location.dto';

export class CreatePostDto {
  @IsNumber()
  readonly type: number;

  @IsNumber()
  readonly category: number;

  @IsNumber()
  readonly condition: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly details: string;

  @IsObject()
  readonly location: LocationDto;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly number: number;

  @IsBoolean()
  readonly nonNegotiablePriceYn: boolean;

  @IsBoolean()
  readonly hide: boolean;

  @IsString({ each: true })
  readonly key: string[];
}
