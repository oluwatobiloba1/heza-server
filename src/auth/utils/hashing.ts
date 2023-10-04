import * as bcrypt from 'bcrypt';



export class Hash{
    private static saltOrRounds = 10;

    static async hashPassword(password: string): Promise<string> {
        const hash = await bcrypt.hash(password, this.saltOrRounds);
        return hash;
    }

    static async comparePassword(password: string, hash: string): Promise<boolean> {
        const match = await bcrypt.compare(password, hash);
        return match;
    }
}