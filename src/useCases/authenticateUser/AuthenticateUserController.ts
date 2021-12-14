import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

export class AuthenticateUserController {
  constructor (
    private readonly authenticateUserUseCase: AuthenticateUserUseCase
  ) {}

  async handle (request: Request, response: Response) {
    const { userEmail, userPassword } = request.body

    try {
      const token = await this.authenticateUserUseCase.execute({
        userEmail,
        userPassword
      })
      return response.status(200).json(token)
    } catch (err: any) {
      return response.status(400).json({
        status: 'Error',
        message: err.message
      })
    }
  }
}
