import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateShowDTO } from './DTOs/createShow.dto'
import { Show } from './show.schema'
import { UpdateShowDTO } from './DTOs/updateShow.dto'

@Injectable()
export class AgendaService {
  constructor(
    @InjectModel(Show.name) private readonly agendaModel: Model<Show>
  ) {}

  async create(createAgendaDTO: CreateShowDTO): Promise<Show> {
    const createdAgenda = await this.agendaModel.create(createAgendaDTO)
    return createdAgenda
  }

  async findAll(): Promise<Show[]> {
    return this.agendaModel.find().exec()
  }

  async findOne(id: string): Promise<Show> {
    return this.agendaModel.findOne({ _id: id }).exec()
  }

  async update(updateShowDTO: UpdateShowDTO): Promise<Show> {
    await this.agendaModel
      .findByIdAndUpdate(updateShowDTO._id, updateShowDTO)
      .exec()
    return this.agendaModel.findById(updateShowDTO._id)
  }

  async delete(id: string) {
    const deletedAgenda = await this.agendaModel
      .findByIdAndDelete({ _id: id })
      .exec()
    return deletedAgenda
  }
}
