import {
  Body,
  Controller,
  Post,
  Res,
  HttpException,
  HttpStatus,
  UnauthorizedException
} from '@nestjs/common'
import { Response } from 'express'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  async signIn(
    @Res({ passthrough: true }) response: Response,
    @Body() { email, password }
  ): Promise<any> {
    const token = await this.authService.signIn(email, password)

    if (!token) response.sendStatus(401)

    response.cookie('token', token)

    return { token }
  }
}
