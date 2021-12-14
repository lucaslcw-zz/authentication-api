import { User } from '../entities/user.entity'

export interface IUsersRepository {
  findAll(): Promise<User[]>
  findByEmail(userEmail: string): Promise<User|null>
  create(user: User): Promise<void>
}
