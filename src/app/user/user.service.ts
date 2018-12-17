import {User} from './user';

export class UserService {
    public static getCurrentUser(): User {
        return {
            id: 'fakeUser123',
            name: 'Jon Testmann'
        };
    }
}
