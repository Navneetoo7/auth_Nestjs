import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
  {
    id: 1,
    username: 'navneet',
    password: 'password',
  },
  {
    id: 2,
    username: 'sanjay',
    password: 'password',
  },
];
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  validateUser({ username, password }: AuthPayloadDto) {
    const users = fakeUsers.find((user) => user.username === username);
    if (!users) return null;
    if (password === users.password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...user } = users;
      return this.jwtService.sign(user);
    }
  }
}
