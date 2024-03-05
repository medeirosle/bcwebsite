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
        host: 'smtp.mailgun.org',
        secure: false,
        port: 587,
        auth: {
          user: 'postmaster@sandbox8b4cafd51a924bb5b42c02baba33e60f.mailgun.org',
          pass: '840f6550d6d553b2aaf46e393c0304eb-2c441066-593c43d8'
        },
        ignoreTLS: true
      }
    })
  ],
  providers: [ContactService],
  controllers: [ContactController]
})
export class ContactModule {}
