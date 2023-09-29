import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchemas } from './schema/user.schema';
import { UserRepo } from './user.repository';



@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchemas }])],
  controllers: [UserController],
  providers: [UserService, UserRepo],
  exports: [UserService]
})
export class UserModule {}
