import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;
}