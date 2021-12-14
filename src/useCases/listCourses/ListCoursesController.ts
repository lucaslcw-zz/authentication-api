import { Request, Response } from 'express'

import { ListCoursesUseCase } from './ListCoursesUseCase'

export class ListCoursesController {
  async handle (request: Request, response: Response) {
    const listCoursesUseCase = new ListCoursesUseCase()

    try {
      const courses = await listCoursesUseCase.execute()

      return response.status(200).json(courses)
    } catch (err) {
      return response.status(400).json({
        status: 'Error',
        message: err.message
      })
    }
  }
}
