import { Request, Response } from 'express'

import { CreateCourseUseCase } from './CreateCourseUseCase'

export class CreateCourseController {
  async handle (request: Request, response: Response) {
    const { name, price } = request.body

    const createCourseUseCase = new CreateCourseUseCase()

    try {
      await createCourseUseCase.execute({
        name,
        price
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
