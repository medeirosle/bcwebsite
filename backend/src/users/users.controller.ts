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
  Put
} from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './user.schema'
import { CreateUserDTO } from './DTOs/createUser.dto'
import { UpdateUserDTO } from './DTOs/updateUser.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Get(':id')
  async getUser(@Param() params: any) {
    return this.userService.findOne(params.id)
  }

  @Put()
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return await this.userService.create(createUserDTO)
  }

  @Post(':id')
  async updateUser(
    @Param() params: any,
    @Body() updateUserDTO: UpdateUserDTO
  ): Promise<User> {
    return this.userService.update({ ...updateUserDTO, _id: params.id })
  }

  @Delete(':id')
  async deleteUser(@Param() params: any): Promise<void> {
    this.userService.delete(params.id)
  }
}
