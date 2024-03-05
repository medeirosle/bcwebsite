import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ContactController } from './contact.controller'
import { ContactService } from './contact.service'
import { MailerModule } from '@nestjs-modules/mailer'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        secure: process.env.MAIL_SECURE === 'true',
        port: parseInt(process.env.MAIL_PORT),
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD
        },
        ignoreTLS: process.env.MAIL_IGNORE_TLS === 'true'
      }
    })
  ],
  providers: [ContactService],
  controllers: [ContactController]
})
export class ContactModule {}
