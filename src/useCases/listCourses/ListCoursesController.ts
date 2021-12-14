import { Request, Response } from 'express'

import { ListCoursesUseCase } from './ListCoursesUseCase'

export class ListCoursesController {
  constructor (
    private readonly listCoursesUseCase: ListCoursesUseCase
  ) {}

  async handle (request: Request, response: Response) {
    try {
      const courses = await this.listCoursesUseCase.execute()
      return response.status(200).json(courses)
    } catch (err: any) {
      return response.status(400).json({
        status: 'Error',
        message: err.message
      })
    }
  }
}
