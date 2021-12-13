import Course from '../../database/models/course.model';

interface ICreateCourseRequest {
  name: string;
  price: number;
}

export class CreateCourseUseCase {
  async execute({ name, price }: ICreateCourseRequest): Promise<void> {
    await Course.create({
      name,
      price,
    });
  }
}
