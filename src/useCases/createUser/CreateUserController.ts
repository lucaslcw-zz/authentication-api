import { Request, Response } from 'express'

import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle (request: Request, response: Response) {
    const { username, name, password } = request.body

    const createUserUseCase = new CreateUserUseCase()

    try {
      await createUserUseCase.execute({
        username,
        name,
        password
      })

      return response.status(200).json()
    } catch (err) {
      return response.status(400).json({
        status: 'Error',
        message: err.message
      })
    }
  }
}
