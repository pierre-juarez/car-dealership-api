import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Audi',
    model: 'A8',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'A10',
  },
  {
    id: uuid(),
    brand: 'Volvo',
    model: 'XC90',
  },
  {
    id: uuid(),
    brand: 'BMW',
    model: 'X5',
  },
];
