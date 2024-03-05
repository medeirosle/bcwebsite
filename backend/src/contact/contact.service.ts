import { Injectable, Logger } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class ContactService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail({ email, name, message }): Promise<void> {
    try {
      return await this.mailerService.sendMail({
        to: 'caicarabruxaria@gmail.com',
        from: email,
        subject: 'Contato pelo website - de ' + name,
        html: message
      })
    } catch (err) {
      console.log(err)

      throw err
    }
  }
}
