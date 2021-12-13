import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';

interface User {
  _id: string;
  name: string;
  username: string;
  password: string;
}

const UserEntity = new Schema<User>({
  _id: {
    type: String,
    default: uuid(),
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model<User>('User', UserEntity);
