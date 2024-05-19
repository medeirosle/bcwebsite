import { Injectable } from '@nestjs/common'

@Injectable()
export class ContactService {
  constructor() {}

  async sendEmail({ email, name, message }): Promise<void> {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: {
          'from_name': name,
          'message': message,
          'reply_to': email,
        }
      })
    })

    if (!response.ok) throw await response.text();
    } catch (err) {
      console.log(err)

      throw err
    }
  }
}
