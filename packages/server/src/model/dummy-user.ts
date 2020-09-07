export interface User {
  id: string;
  username: string;
  room: string;
}

export enum USER_FLAGS {
  NOT_FOUND = -1,
  REMOVE_AMOUNT = 1,
}

export type Predicate<T> = (value: T, index: number, obj: T[]) => unknown;

export class DummyUser {
  constructor(private users: Array<User> = []) {}

  public get(id?: string): Array<User> | User {
    if (!id) return this.users;
    const user = this.users.find(this._getUserById(id));
    return user;
  }

  public add(user: User): boolean {
    this.users.push(user);
    return true;
  }

  public remove(id: string): boolean {
    const userIndex = this.users.findIndex(this._getUserById(id));
    if (userIndex !== USER_FLAGS.NOT_FOUND) {
      this.users.splice(userIndex, USER_FLAGS.REMOVE_AMOUNT);
      return true;
    }
  }

  private _getUserById(id): Predicate<User> {
    return (user) => (user.id = id);
  }
}
