import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { create } from 'domain';

@Controller('cars')
export class CarsController {
  constructor(private readonly cardService: CarsService) {}

  @Get()
  getAllCars() {
    return this.cardService.findAll();
  }

  @Get(':id')
  getCardById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.cardService.findOneById(id);
  }

  @UsePipes(ValidationPipe)
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.cardService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
      method: 'DELETE',
    };
  }
}
