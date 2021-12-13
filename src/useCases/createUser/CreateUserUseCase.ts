import { hash } from 'bcryptjs';

import User from '../../database/models/user.model';

interface ICreateUserRequest {
  name: string;
  username: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({ name, username, password }: ICreateUserRequest): Promise<void> {
    const userAlreadyExists = await User.findOne({ username });

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const passwordHash = await hash(password, 8);

    await User.create({
      name,
      username,
      password: passwordHash,
    });
  }
}
