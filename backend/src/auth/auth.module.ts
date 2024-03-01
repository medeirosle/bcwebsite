import { Module, forwardRef } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from 'src/users/users.module'
import { JWT_SECRET } from './auth.constants'
import { AuthGuard } from './auth.guard'

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      global: true,
      secret: JWT_SECRET
    })
  ],
  exports: [AuthGuard]
})
export class AuthModule {}
