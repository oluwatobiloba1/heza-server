import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { isEmail } from 'class-validator';
import { UserRepo } from './user.repository';
import { CreateUsertDto } from './dto/create-user.dto';
import { IUser } from './schema/user.interface';

@Injectable()
export class UserService {
    constructor(readonly repo: UserRepo) {}

    async findOne(key: string): Promise<any> {
        let user: any;
        if(isEmail(key)) {
           user= await this.repo.findUserByEmail(key);
        }
        else {
            user = await this.repo.findUserById(key);
        }
        return user;
    }

    async createUser(createdUserDto: CreateUsertDto): Promise<any> {
        const user = await this.findOne(createdUserDto.email);
        if (user) {
            throw new BadRequestException(
                'user with this email already exists',
            );
        }

        const newUser = await this.repo.createUser(createdUserDto);

        if(!newUser) {
            throw new InternalServerErrorException('user not created');
        }
        return newUser;
    }
}
