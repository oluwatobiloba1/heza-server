import { SharedRepository } from "src/shared/shared-repository";
import { User } from "./schema/user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUsertDto } from "./dto/create-user.dto";


export class UserRepo extends SharedRepository<
User,
CreateUsertDto
> {
    constructor(@InjectModel(User.name) model: Model<User>,) {
        super(model);
    }

    

    // public async createUser(createUserDto: CreateUsertDto) {
    //     const user = this.create(createUserDto);
    //     return user;
    // }

    // public async findUserByEmail(email: string): Promise<User> {
    //     return this.model.findOne({ email }).exec();
    // }
    // public async findUserById(id: string): Promise<User> {
    //     return this.model.findOne({ _id:id }).exec();
    // }
}