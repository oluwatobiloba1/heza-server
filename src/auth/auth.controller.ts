import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { CreateUsertDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(readonly authService: AuthService){}
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const {email, password} = loginDto;
        return this.authService.login(email, password)
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    async signup(@Body() createUserDto: CreateUsertDto) {
        return this.authService.signup(createUserDto)
    }
}
