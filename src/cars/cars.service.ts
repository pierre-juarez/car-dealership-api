import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cards = [
    {
      id: 1,
      brand: 'Audi',
      model: 'A8',
    },
    {
      id: 2,
      brand: 'BMW',
      model: 'X5',
    },
    {
      id: 3,
      brand: 'Mercedes',
      model: 'C63',
    },
    {
      id: 4,
      brand: 'Volkswagen',
      model: 'Passat',
    },
  ];

  findAll() {
    return this.cards;
  }

  findOneById(id: number) {
    console.log('id', id);
    return this.cards.find((card) => card.id === id);
  }
}
