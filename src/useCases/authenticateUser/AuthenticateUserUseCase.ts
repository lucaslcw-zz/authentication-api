import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { JWT_PASS } from '../../config'
import { IAuthenticateUserRequestDTO } from './AuthenticateUserDTO'
import { IUsersRepository } from '../../repositories/IUsersRepository'

export class AuthenticateUserUseCase {
  constructor (
    private readonly mongoUsersRepository: IUsersRepository
  ) {}

  async execute ({ userEmail, userPassword }: IAuthenticateUserRequestDTO): Promise<string> {
    const userAlreadyExists = await this.mongoUsersRepository.findByEmail(userEmail)

    if (!userAlreadyExists) {
      throw new Error('User not already exists!')
    }

    const matchPassword = await compare(userPassword, userAlreadyExists.userPassword)

    if (!matchPassword) {
      throw new Error('User or password incorrect!')
    }

    const token = sign({}, JWT_PASS as string, {
      subject: userAlreadyExists.userId,
      expiresIn: '30d'
    })

    return token
  }
}
