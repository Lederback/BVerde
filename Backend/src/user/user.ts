/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export class User extends Document {
    name: String;
    email: String;
    cpf: String;
    rg: String;
    address: String;
    password: String;
    walletAddress: String;
}