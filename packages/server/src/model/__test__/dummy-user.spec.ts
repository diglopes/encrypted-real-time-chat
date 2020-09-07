import { DummyUser } from '../dummy-user';

describe('Dummy User', () => {
  it('should return an empty array', () => {
    const dummyUser = new DummyUser();
    const users = dummyUser.get();
    expect(users).toEqual([]);
  });
});
