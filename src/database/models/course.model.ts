import { Schema, model } from 'mongoose'

import { Course } from '../../entities/course.entity'

const CourseEntity = new Schema<Course>({
  courseId: String,
  courseName: String,
  coursePrice: String
})

export default model<Course>('Course', CourseEntity)
