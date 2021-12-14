import { hash } from 'bcryptjs'

import { User } from '../../entities/user.entity'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor (
    private readonly mongoUsersRepository: IUsersRepository
  ) {}

  async execute (data: ICreateUserRequestDTO): Promise<void> {
    const userAlreadyExists = await this.mongoUsersRepository.findByEmail(data.userEmail)

    if (userAlreadyExists) {
      throw new Error('User already exists!')
    }

    const hashPassword = await hash(data.userPassword, 8)

    const user = new User({ ...data, userPassword: hashPassword })
    await this.mongoUsersRepository.create(user)
  }
}
