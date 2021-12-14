import { Request, Response } from 'express'
import { CreateCourseUseCase } from './CreateCourseUseCase'

export class CreateCourseController {
  constructor (
    private readonly createCourseUseCase: CreateCourseUseCase
  ) {}

  async handle (request: Request, response: Response) {
    const { courseName, coursePrice } = request.body

    try {
      const course = await this.createCourseUseCase.execute({
        courseName,
        coursePrice
      })
      return response.status(200).json(course)
    } catch (err: any) {
      return response.status(400).json({
        status: 'Error',
        message: err.message
      })
    }
  }
}
