import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';

const fakeUsers = [
    {
        id:1,
        username: 'navneet',
        password: 'password'
    },
    {
        id:2,
        username: 'sanjay',
        password: 'password'
    }
]
@Injectable()
export class AuthService {
    validateUser({username, password}:AuthPayloadDto){
        const users = fakeUsers.find((user)=> user.username === username);
        if(!users) return null;
        
    }
}
