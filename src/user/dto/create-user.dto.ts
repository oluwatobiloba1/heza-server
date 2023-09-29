
import { IsNotEmpty, IsNumber, IsString, IsEnum, IsPhoneNumber, IsOptional } from "class-validator";
import { Roles } from "../roles/roles";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUsertDto {
  @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstname: string;

@ApiProperty()
    @IsString()
    @IsNotEmpty()
    lastname: string;

@ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

@ApiProperty()
    @IsEnum(Roles)
    @IsNotEmpty()
    role: Roles;

@ApiProperty()
    @IsNotEmpty()
    DOB: Date;

@ApiProperty()
    @IsNotEmpty()
    password: string;

@ApiProperty()
    @IsPhoneNumber()
    phonenumber: string;
    
@ApiProperty()
    @IsOptional()
    @IsString()
    imageUrl: string;

  }