import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsertDto } from 'src/user/dto/create-user.dto';
import { IUser } from 'src/user/schema/user.interface';
import { User } from 'src/user/schema/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

  async login(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException('will you like to create an account?');
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }

  async signup(dto: CreateUsertDto){
        const user = await this.userService.createUser(dto);
        if(!user) {
            throw new UnauthorizedException('user not created');
        }
        const {password, ...newUser} = user;

        console.log(newUser)
        return {message: 'user created successfully', token: 'token'};
  }
}
