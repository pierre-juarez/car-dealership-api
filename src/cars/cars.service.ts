import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cards: Car[] = [
    {
      id: uuid(),
      brand: 'Audi',
      model: 'A8',
    },
    {
      id: uuid(),
      brand: 'BMW',
      model: 'X5',
    },
    {
      id: uuid(),
      brand: 'Mercedes',
      model: 'C63',
    },
    {
      id: uuid(),
      brand: 'Volkswagen',
      model: 'Passat',
    },
  ];

  findAll() {
    return this.cards;
  }

  findOneById(id: string) {
    console.log('id', id);
    const car = this.cards.find((c) => c.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cards.push(car);
    return car;
  }

}
