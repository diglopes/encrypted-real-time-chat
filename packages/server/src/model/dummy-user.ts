export interface User {
  id: string;
  username: string;
  room: string;
}

export class DummyUser {
  constructor(private users: Array<User> = []) {}

  public get(id?: string): Array<User> | User {
    if (!id) return this.users;
    const getUserById = (user) => (user.id = id);
    const user = this.users.find(getUserById);
    return user;
  }

  public add(user: User): boolean {
    this.users.push(user);
    return true;
  }
}
