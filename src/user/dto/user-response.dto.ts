
import { IsNotEmpty, IsNumber, IsString, IsEnum, IsPhoneNumber, IsOptional } from "class-validator";
import { Roles } from "../roles/roles";


export class UserResponsetDto {
    private firstname: string;
    private lastname: string;
    private email: string;
    private role: Roles;
    private DOB: Date;
    private password: string;
    private phonenumber: string;
    private imageUrl: string;
  }