import { Course } from '../../entities/course.entity'
import { ICoursesRepository } from '../../repositories/ICoursesRepository'
import { ICreateCourseRequestDTO } from './CreateCourseDTO'

export class CreateCourseUseCase {
  constructor (
    private readonly mongoCoursesRepository: ICoursesRepository
  ) {}

  async execute (data: ICreateCourseRequestDTO): Promise<Course> {
    const course = new Course(data)
    return await this.mongoCoursesRepository.create(course)
  }
}
