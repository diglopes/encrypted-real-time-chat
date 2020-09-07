export interface User {
  id: string;
  username: string;
  room: string;
}

export class DummyUser {
  constructor(private users: Array<User> = []) {}

  public get(): Array<User> {
    return this.users;
  }

  public add(user: User): boolean {
    this.users.push(user);
    return true;
  }
}
