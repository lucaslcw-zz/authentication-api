import UserModel from '../../database/models/user.model'
import { User } from '../../entities/user.entity'
import { IUsersRepository } from '../IUsersRepository'

export class MongoUsersRepository implements IUsersRepository {
  async findAll (): Promise<User[]> {
    return await UserModel.find()
  }

  async findByEmail (userEmail: string): Promise<User|null> {
    return await UserModel.findOne({ userEmail })
  }

  async create (user: User): Promise<void> {
    await UserModel.create(user)
  }
}
