import { MongoCoursesRepository } from '../../repositories/implementations/MongoCoursesRepository'
import { CreateCourseController } from './CreateCourseController'
import { CreateCourseUseCase } from './CreateCourseUseCase'

export default function CreateCourseFactory () {
  const mongoCoursesRepository = new MongoCoursesRepository()
  const createCourseUseCase = new CreateCourseUseCase(mongoCoursesRepository)
  const createCourseController = new CreateCourseController(createCourseUseCase)
  return createCourseController
}
