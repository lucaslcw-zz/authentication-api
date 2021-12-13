import { v4 as uuid } from 'uuid';

export class Course {
  public readonly courseId: string
  public courseName: string
  public coursePrice: number

  constructor(props: Omit<Course, 'courseId'>, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.courseId = uuid();
    }
  }
}
