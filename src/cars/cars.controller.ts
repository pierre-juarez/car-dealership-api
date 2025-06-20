import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cards = ['Audi', 'BMW', 'Mercedes'];
  @Get()
  getAllCars() {
    return this.cards;
  }

  @Get(':id')
  getCardById(@Param('id') id: string) {
    console.log('id', id);
    return {
      id,
      car: this.cards[id],
    };
  }
}
