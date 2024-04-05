import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {
        message: 'Invalid role. Must be one of the following: INTERN, ENGINEER, ADMIN'
    })
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}