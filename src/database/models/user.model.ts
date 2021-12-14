import { Schema, model } from 'mongoose'

import { User } from '../../entities/user.entity'

const UserEntity = new Schema<User>({
  userId: String,
  userName: String,
  userEmail: String,
  userPassword: String
})

export default model<User>('User', UserEntity)
