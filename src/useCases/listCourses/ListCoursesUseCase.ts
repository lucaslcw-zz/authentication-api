import Course from '../../entities/course.entity';

export class ListCoursesUseCase {
  async execute() {
    const courses = await Course.find();

    return { courses };
  }
}
