import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CapsuleService } from './capsule.service';
import { CreateCapsuleDto } from './dto/create-capsule.dto';
import { UpdateCapsuleDto } from './dto/update-capsule.dto';
import { NotFoundException, } from '@nestjs/common';

@Controller('capsule')
export class CapsuleController {
  constructor(private readonly capsuleService: CapsuleService) {}

  @Post()
  create(@Body() createCapsuleDto: CreateCapsuleDto) {
    return this.capsuleService.create(createCapsuleDto);
  }

  @Get()
  findAll() {
    return this.capsuleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const capsule = await this.capsuleService.findOneById(id);
    if (!capsule) {
      throw new NotFoundException('Capsule not found');
    }
    return capsule; 
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCapsuleDto: UpdateCapsuleDto) {
    return this.capsuleService.update(+id, updateCapsuleDto);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
   return await this.capsuleService.deleteCapsule(id)
  }
}
