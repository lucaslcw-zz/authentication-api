import { Course } from '../entities/course.entity'

export interface ICoursesRepository {
  findAll(): Promise<Course[]>
  create(course: Course): Promise<void>
}
