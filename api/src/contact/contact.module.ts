import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ContactController } from './contact.controller'
import { ContactService } from './contact.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
  ],
  providers: [ContactService],
  controllers: [ContactController]
})
export class ContactModule {}
