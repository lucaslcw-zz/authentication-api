import { Router } from 'express'

import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

import AuthenticateUserFactory from './useCases/authenticateUser/AuthenticateUserFactory'
import CreateUserFactory from './useCases/createUser/CreateUserFactory'

import ListCoursesFactory from './useCases/listCourses/ListCoursesFactory'
import CreateCourseFactory from './useCases/createCourse/CreateCourseFactory'

const router = Router()

router.post('/authenticateUser', (request, response) => {
  return AuthenticateUserFactory().handle(request, response)
})
router.post('/createUser', (request, response) => {
  return CreateUserFactory().handle(request, response)
})

router.get('/listCourses', ensureAuthenticated, (request, response) => {
  return ListCoursesFactory().handle(request, response)
})
router.post('/createCourse', ensureAuthenticated, (request, response) => {
  return CreateCourseFactory().handle(request, response)
})

export { router }
