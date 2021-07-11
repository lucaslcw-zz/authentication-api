import { Router } from 'express';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController';
import { CreateUserController } from './useCases/createUser/CreateUserController';

import { ListCoursesController } from './useCases/listCourses/ListCoursesController';
import { CreateCourseController } from './useCases/createCourse/CreateCourseController';

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();

const listCoursesController = new ListCoursesController();
const createCourseController = new CreateCourseController();

router.post('/login', authenticateUserController.handle);
router.post('/users', createUserController.handle);

router.get('/course', ensureAuthenticated, listCoursesController.handle);
router.post('/course', ensureAuthenticated, createCourseController.handle);

export { router };
