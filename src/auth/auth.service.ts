import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsertDto } from 'src/user/dto/create-user.dto';
import { IUser } from 'src/user/schema/user.interface';
import { User } from 'src/user/schema/user.schema';
import { UserService } from 'src/user/user.service';
import { GenerateToken } from './utils/token-generator';
import { JwtService } from '@nestjs/jwt';
import { TokenData } from './dto/token.dto';

@Injectable()
export class AuthService {
    constructor(
      private userService: UserService, 
      private generateToken: GenerateToken,
      private jwtService: JwtService
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
            throw new UnauthorizedException('user not created');
        }
        const {password, ...newUser} = user;

        const payload: Partial<TokenData> = {
          username: newUser.email,
          userId: newUser.id,
          roles: newUser.role
        };

        console.log(newUser)
        const token = await this.jwtService.signAsync({sub:payload}, {expiresIn: '30d'});
        
        console.log(token)
        return {message: 'user created successfully', email: newUser.email, token};
  }
}
