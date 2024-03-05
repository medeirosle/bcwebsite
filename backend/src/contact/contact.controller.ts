import { Body, Controller, Post } from '@nestjs/common'
import { ContactService } from './contact.service'

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async sendEmail(@Body() { email, name, message }) {
    await this.contactService.sendEmail({ email, name, message })
  }
}
