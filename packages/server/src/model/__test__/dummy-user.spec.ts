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

  it('should get an user by id if the user is found', () => {
    const user1 = {
      id: 'fake-id-1',
      username: 'any-username-1',
      room: 'fake-room',
    };
    const user2 = {
      id: 'fake-id-2',
      username: 'any-username-2',
      room: 'fake-room',
    };
    const dummyUser = new DummyUser();
    dummyUser.add(user1);
    dummyUser.add(user2);
    const userFound = dummyUser.get(user1.id);
    expect(userFound).toEqual(user1);
  });

  it('should return `undefined` if the user id is not found', () => {
    const dummyUser = new DummyUser();
    const userFound = dummyUser.get('inexistent-id');
    expect(userFound).toBe(undefined);
  });

  it('should remove an user by id and return true', () => {
    const user1 = {
      id: 'fake-id-1',
      username: 'any-username-1',
      room: 'fake-room',
    };
    const user2 = {
      id: 'fake-id-2',
      username: 'any-username-2',
      room: 'fake-room',
    };
    const dummyUser = new DummyUser();
    dummyUser.add(user1);
    dummyUser.add(user2);
    const hasRemoved = dummyUser.remove(user1.id);
    expect(dummyUser.get()).toEqual([user2]);
    expect(hasRemoved).toBeTruthy();
  });

  it('should return `false` when trying to remove a user but no user is found', () => {
    const dummyUser = new DummyUser();
    const hasRemoved = dummyUser.remove('fake-id');
    expect(hasRemoved).toBe(false);
  });
});
