import { Controller, Get, Post, Put, Body, Delete, Param } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { Show } from './show.schema';
import { throws } from 'assert';
import { CreateShowDTO } from './DTOs/createShow.dto';
import { Logger } from '@nestjs/common';
import { UpdateShowDTO } from './DTOs/updateShow.dto';

@Controller('agenda')
export class AgendaController {
    constructor(private readonly agendaService: AgendaService) {}

    @Get()
    getAgenda(): Promise<Show[]> {
      return this.agendaService.findAll();
    }

    @Get(':id')
    getShow(@Param() params: any): Promise<Show> {
      return this.agendaService.findOne(params.id);
    }


    @Put('add')
    addShow(@Body() createShowDTO: CreateShowDTO): Promise<Show> {
      return this.agendaService.create(createShowDTO)
    }

    @Post(':id')
    updateShow(@Param() params: any, @Body() updateShowDTO: UpdateShowDTO): Promise<Show>{
      return this.agendaService.update({...updateShowDTO, _id: params.id})
    }

    @Delete(':id')
    deleteShow(@Param() params: any){

      Logger.log(params.id)
      this.agendaService.delete(params.id)
    }

}
