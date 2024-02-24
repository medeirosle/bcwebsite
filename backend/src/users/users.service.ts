import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './user.schema'
import { CreateUserDTO } from './DTOs/createUser.dto'
import { UpdateUserDTO } from './DTOs/updateUser.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const createdUser = await this.userModel.create(createUserDTO)
    return createdUser
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).exec()
  }

  async findOneByEmailAndPassword(
    email: string,
    password: string
  ): Promise<User> {
    return this.userModel.findOne({ email, password }).exec()
  }

  async update(updateUserDTO: UpdateUserDTO): Promise<User> {
    await this.userModel
      .findByIdAndUpdate(updateUserDTO._id, updateUserDTO)
      .exec()
    return this.userModel.findById(updateUserDTO._id)
  }

  async delete(id: string) {
    const deletedUser = await this.userModel
      .findByIdAndDelete({ _id: id })
      .exec()
    return deletedUser
  }
}
