import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';

interface Course {
  _id: string;
  name: string;
  username: string;
  password: string;
}

const CourseEntity = new Schema<Course>({
  _id: {
    type: String,
    default: uuid(),
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default model<Course>('Course', CourseEntity);
