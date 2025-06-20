import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly cardService: CarsService) {}

  @Get()
  getAllCars() {
    return this.cardService.findAll();
  }

  @Get(':id')
  getCardById(@Param('id', ParseIntPipe) id: number) {
    return this.cardService.findOneById(id);
  }
}
