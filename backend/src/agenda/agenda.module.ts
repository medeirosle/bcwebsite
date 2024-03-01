import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AgendaController } from './agenda.controller'
import { AgendaService } from './agenda.service'
import { Show, ShowSchema } from './show.schema'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Show.name, schema: ShowSchema }])
  ],
  controllers: [AgendaController],
  providers: [AgendaService],
  exports: [AgendaService]
})
export class AgendaModule {}
