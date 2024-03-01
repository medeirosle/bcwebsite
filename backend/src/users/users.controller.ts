import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  UseGuards
} from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './user.schema'
import { CreateUserDTO } from './DTOs/createUser.dto'
import { UpdateUserDTO } from './DTOs/updateUser.dto'
import { AuthGuard } from 'src/auth/auth.guard'

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.findAll()
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getUser(@Param() params: any) {
    return this.userService.findOne(params.id)
  }

  @UseGuards(AuthGuard)
  @Put()
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return await this.userService.create(createUserDTO)
  }

  @UseGuards(AuthGuard)
  @Post(':id')
  async updateUser(
    @Param() params: any,
    @Body() updateUserDTO: UpdateUserDTO
  ): Promise<User> {
    return this.userService.update({ ...updateUserDTO, _id: params.id })
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteUser(@Param() params: any): Promise<void> {
    this.userService.delete(params.id)
  }
}
