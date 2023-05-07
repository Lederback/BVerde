/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

// Data transfer object representing the user login information with email and password
export class LoginDto {
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    password: string;
}