import { Course } from '../../entities/course.entity'
import { ICoursesRepository } from '../../repositories/ICoursesRepository'

export class ListCoursesUseCase {
  constructor (
    private readonly mongoCoursesRepository: ICoursesRepository
  ) {}

  async execute (): Promise<Course[]> {
    return await this.mongoCoursesRepository.findAll()
  }
}
