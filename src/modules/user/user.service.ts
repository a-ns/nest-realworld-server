import { Injectable } from '@nestjs/common';
import { User } from 'gql-types';

@Injectable()
export class UserService {
  users: User[] = [{ username: 'alex', email: 'alex@alex.com' }];

  findOneById(username: string) {
    return this.users.find(user => user.username === username);
  }
}
