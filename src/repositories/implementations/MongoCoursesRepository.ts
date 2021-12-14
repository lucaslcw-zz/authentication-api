import CourseModel from '../../database/models/course.model'
import { Course } from '../../entities/course.entity'
import { ICoursesRepository } from '../ICoursesRepository'

export class MongoCoursesRepository implements ICoursesRepository {
  async findAll (): Promise<Course[]> {
    return await CourseModel.find()
  }

  async create (course: Course): Promise<void> {
    await CourseModel.create(course)
  }
}
