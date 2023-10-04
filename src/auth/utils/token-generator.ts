import { JwtService } from "@nestjs/jwt";
import { Roles } from "src/user/roles/roles";


export class GenerateToken{
    constructor( 
        private jwtService: JwtService
        ) {}

    async generateToken(payload: {sub: string, email: string, role: Roles}):Promise<string> {
        const token = await this.jwtService.signAsync(payload);
        return token;
    }
}