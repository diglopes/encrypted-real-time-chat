export class DummyUser {
  constructor(private users: [] = []) {}

  public get(): [] {
    return this.users;
  }
}
