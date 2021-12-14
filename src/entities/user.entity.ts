import { v4 as uuid } from 'uuid'

export class User {
  public readonly userId: string
  public userName: string
  public userEmail: string
  public userPassword: string

  constructor (props: Omit<User, 'userId'>, id?: string) {
    Object.assign(this, props)
    if (!id) {
      this.userId = uuid()
    }
  }
}
