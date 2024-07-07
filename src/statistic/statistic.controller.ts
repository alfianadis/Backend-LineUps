import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('statistic')
@Controller('statistic')
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}

  @Post()
  create(@Body() createStatisticDto: CreateStatisticDto) {
    return this.statisticService.create(createStatisticDto);
  }

  @Get()
  findAll() {
    return this.statisticService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statisticService.findOne(id);
  }
  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.statisticService.findByName(name);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStatisticDto: UpdateStatisticDto,
  ) {
    return this.statisticService.update(id, updateStatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statisticService.remove(id);
  }
}
