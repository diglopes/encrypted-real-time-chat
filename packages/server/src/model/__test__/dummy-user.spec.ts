import { DummyUser } from '../dummy-user';

describe('Dummy User', () => {
  it('should return an empty array', () => {
    const dummyUser = new DummyUser();
    const users = dummyUser.get();
    expect(users).toEqual([]);
  });

  it('should add a new user', () => {
    const user = {
      id: 'fake-id',
      username: 'any-username',
      room: 'fake-room',
    };
    const dummyUser = new DummyUser();
    const result = dummyUser.add(user);
    expect(dummyUser.get()).toEqual([user]);
    expect(result).toBeTruthy();
  });
});
