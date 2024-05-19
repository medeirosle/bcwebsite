import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './user.schema'
import { CreateUserDTO } from './DTOs/createUser.dto'
import { UpdateUserDTO } from './DTOs/updateUser.dto'
import * as crypto from 'crypto'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const existingUser = await this.userModel.findOne({
      email: createUserDTO.email
    })

    if (existingUser) throw new ConflictException()

    const salt = this.getSalt()

    const createdUser = await this.userModel.create({
      ...createUserDTO,
      salt,
      hash: this.getHash(createUserDTO.password, salt)
    })

    delete createdUser.hash, createdUser.salt

    return createdUser
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find({}, '-hash -salt').exec()
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }, '-hash -salt').exec()
  }

  async findOneByEmailAndPassword(
    email: string,
    password: string
  ): Promise<User> {
    const user = await this.userModel.findOne({ email }).exec()

    if (!user) return null

    const informedHash = this.getHash(password, user.salt)

    if (informedHash === user.hash) {
      const userDTO = JSON.parse(JSON.stringify(user))

      delete userDTO.hash
      delete userDTO.salt

      return userDTO
    }
  }

  async update(updateUserDTO: UpdateUserDTO): Promise<User> {
    const user = await this.userModel.findById(updateUserDTO._id)

    if (!user) throw new NotFoundException()

    const hash = this.getHash(updateUserDTO.password, user.salt)

    await this.userModel
      .findByIdAndUpdate(updateUserDTO._id, { ...updateUserDTO, hash })
      .exec()

    const updatedUser = await this.userModel.findById(
      updateUserDTO._id,
      '-hash -salt'
    )

    return updatedUser
  }

  async delete(id: string) {
    await this.userModel.findByIdAndDelete({ _id: id }).exec()
  }

  getSalt() {
    return crypto.randomBytes(16).toString('hex')
  }

  getHash(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`)
  }
}
