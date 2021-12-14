import { Request, Response } from 'express'

import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor (
    private readonly createUserUseCase: CreateUserUseCase
  ) {}

  async handle (request: Request, response: Response) {
    const { userName, userEmail, userPassword } = request.body

    try {
      await this.createUserUseCase.execute({
        userName,
        userEmail,
        userPassword
      })
      return response.status(200).json()
    } catch (err: any) {
      return response.status(400).json({
        status: 'Error',
        message: err.message
      })
    }
  }
}
