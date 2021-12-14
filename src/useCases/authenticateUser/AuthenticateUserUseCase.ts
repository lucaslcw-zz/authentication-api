import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import User from '../../database/models/user.model'
import { JWT_PASS } from '../../config'

interface IAuthenticateUserRequest {
  username: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute ({ username, password }: IAuthenticateUserRequest) {
    const userAlreadyExists = await User.findOne({ username })

    if (!userAlreadyExists) {
      throw new Error('User not already exists!')
    }

    const passwordMatch = await compare(password, userAlreadyExists.password)

    if (!passwordMatch) {
      throw new Error('User or password incorrect!')
    }

    const token = sign({}, JWT_PASS as string, {
      subject: userAlreadyExists.id,
      expiresIn: '30d'
    })

    return { token }
  }
}
