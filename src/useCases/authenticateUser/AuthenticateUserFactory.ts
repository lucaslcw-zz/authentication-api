import { MongoUsersRepository } from '../../repositories/implementations/MongoUsersRepository'
import { AuthenticateUserController } from './AuthenticateUserController'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

export default function AuthenticateUserFactory () {
  const mongoUsersRepository = new MongoUsersRepository()
  const authenticateUserUseCase = new AuthenticateUserUseCase(mongoUsersRepository)
  const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)
  return authenticateUserController
}
