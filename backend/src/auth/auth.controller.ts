import { Body, Controller, Post } from '@nestjs/common'
import { User } from 'src/users/user.schema'
import { UsersService } from 'src/users/users.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UsersService) {}

  @Post('signIn')
  async signIn(@Body() { email, password }): Promise<User> {
    return this.userService.findOneByEmailAndPassword(email, password)
  }
}
