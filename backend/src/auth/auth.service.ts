import { Injectable } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import jwt from 'jsonwebtoken'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async signIn(
    email: string,
    password: string,
    jwtPrivateKey
  ): Promise<string> {
    const user = await this.userService.findOneByEmailAndPassword(
      email,
      password
    )

    if (!user) return null

    delete user.hash, user.salt

    const token = jwt.sign(user, jwtPrivateKey, {
      algorithm: 'RS256'
    })

    return token
  }
}
