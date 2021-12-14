import { MongoCoursesRepository } from '../../repositories/implementations/MongoCoursesRepository'
import { ListCoursesController } from './ListCoursesController'
import { ListCoursesUseCase } from './ListCoursesUseCase'

export default function ListCoursesFactory () {
  const mongoCoursesRepository = new MongoCoursesRepository()
  const listCoursesUseCase = new ListCoursesUseCase(mongoCoursesRepository)
  const listCoursesController = new ListCoursesController(listCoursesUseCase)
  return listCoursesController
}
