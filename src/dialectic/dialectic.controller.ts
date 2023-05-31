import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DialecticService } from './dialectic.service';
import { CreateDialecticDto } from './dto/create-dialectic.dto';
import { UpdateDialecticDto } from './dto/update-dialectic.dto';

@Controller('dialectic')
export class DialecticController {
  constructor(private readonly dialecticService: DialecticService) {}

  @Post()
  async create(@Body() createDialecticDto: CreateDialecticDto) {
    return await this.dialecticService.create(createDialecticDto);
  }

  @Get()
  findAll() {
    return this.dialecticService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dialecticService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDialecticDto: UpdateDialecticDto,
  ) {
    return this.dialecticService.update(+id, updateDialecticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dialecticService.remove(+id);
  }
}
