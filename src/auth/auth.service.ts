import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUsertDto } from 'src/user/dto/create-user.dto';
import { IUser } from 'src/user/schema/user.interface';
import { User } from 'src/user/schema/user.schema';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { TokenData } from './dto/token.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
      private userService: UserService, 
      private jwtService: JwtService,
      private configService: ConfigService
      ) {}

  async login(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new UnauthorizedException('will you like to create an account?');
    }
    if (user?.password !== pass) {
      throw new UnauthorizedException('invalid credentials');
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }

  async signup(dto: CreateUsertDto){
        const user = await this.userService.createUser(dto);
        if(!user) {
            throw new InternalServerErrorException('user not created');
        }
        const {password, ...newUser} = user;

        const payload: any = {
          sub: 'rapzter5@gmail.com',
        };

        console.log(newUser)
        // const token = this.jwtService.sign(payload)
        
        // const decoded = this.jwtService.verify(token, { secret: this.configService.get<string>('SECRET') });
        // console.log(decoded);
        return {message: 'user created successfully',};
  }
}
