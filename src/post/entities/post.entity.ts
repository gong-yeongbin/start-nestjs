import { Entity } from 'typeorm';

@Entity('post')
export class Post {
  type: number;
  category: number;
  condition: number;
  title: string;
  details: string;
  location: Location;
  price: number;
  number: number;
  nonNegotiablePriceYn: boolean;
  hide: boolean;
  key: string[];
}
