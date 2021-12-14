import { MongoUsersRepository } from '../../repositories/implementations/MongoUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

export default function CreateUserFactory () {
  const mongoUsersRepository = new MongoUsersRepository()
  const createUserUseCase = new CreateUserUseCase(mongoUsersRepository)
  const createUserController = new CreateUserController(createUserUseCase)
  return createUserController
}
