import { Request, Response } from 'express';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateUserUseCase = new AuthenticateUserUseCase();

    try {
      const token = await authenticateUserUseCase.execute({
        username,
        password,
      });

      return response.status(200).json(token);
    } catch (err) {
      return response.status(400).json({
        status: 'Error',
        message: err.message,
      });
    }
  }
}
