import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CriteriaService } from './criteria.service';
import { CreateCriterionDto } from './dto/create-criterion.dto';
import { UpdateCriterionDto } from './dto/update-criterion.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Criteria')
@Controller('criteria')
export class CriteriaController {
  constructor(private readonly criteriaService: CriteriaService) {}

  @Post()
  create(@Body() createCriterionDto: CreateCriterionDto) {
    return this.criteriaService.create(createCriterionDto);
  }

  @Get()
  findAll() {
    return this.criteriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.criteriaService.findOne(id);
  }
  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.criteriaService.findByName(name);
  }
  @Get('target/:target')
  findByTarget(@Param('target') target: string) {
    return this.criteriaService.findByTarget(target);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCriterionDto: UpdateCriterionDto,
  ) {
    return this.criteriaService.update(id, updateCriterionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.criteriaService.remove(id);
  }
}
