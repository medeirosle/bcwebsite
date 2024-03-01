import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Delete,
  Param,
  UseGuards
} from '@nestjs/common'
import { AgendaService } from './agenda.service'
import { Show } from './show.schema'
import { CreateShowDTO } from './DTOs/createShow.dto'
import { Logger } from '@nestjs/common'
import { UpdateShowDTO } from './DTOs/updateShow.dto'
import { AuthGuard } from 'src/auth/auth.guard'

@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @UseGuards(AuthGuard)
  @Get()
  getAgenda(): Promise<Show[]> {
    return this.agendaService.findAll()
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  getShow(@Param() params: any): Promise<Show> {
    return this.agendaService.findOne(params.id)
  }

  @UseGuards(AuthGuard)
  @Put('add')
  addShow(@Body() createShowDTO: CreateShowDTO): Promise<Show> {
    return this.agendaService.create(createShowDTO)
  }

  @UseGuards(AuthGuard)
  @Post(':id')
  updateShow(
    @Param() params: any,
    @Body() updateShowDTO: UpdateShowDTO
  ): Promise<Show> {
    return this.agendaService.update({ ...updateShowDTO, _id: params.id })
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  deleteShow(@Param() params: any) {
    Logger.log(params.id)
    this.agendaService.delete(params.id)
  }
}
