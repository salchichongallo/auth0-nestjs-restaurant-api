import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Item } from 'src/item';
import { Items } from 'src/items';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Items> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Item> {
    return this.itemsService.find(id);
  }

  @Post()
  async create(@Body('item') item: Item): Promise<void> {
    await this.itemsService.create(item);
  }

  @Put()
  async update(@Body('item') item: Item): Promise<void> {
    await this.itemsService.update(item);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.itemsService.delete(id);
  }
}
