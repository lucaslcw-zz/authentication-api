import Course from '../../database/models/course.model'

export class ListCoursesUseCase {
  async execute () {
    const courses = await Course.find()

    return { courses }
  }
}
