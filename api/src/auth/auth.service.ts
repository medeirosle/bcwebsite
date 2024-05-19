import { Injectable, Logger, UnauthorizedException } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(email: string, password: string): Promise<string> {
    const user = await this.userService.findOneByEmailAndPassword(
      email,
      password
    )

    if (!user) throw new UnauthorizedException()

    delete user.hash, user.salt

    const token = await this.jwtService.signAsync(JSON.stringify(user))

    return token
  }
}
