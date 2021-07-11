import Course from '../../entities/course.entity';

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
