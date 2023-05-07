/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

// Schema representing the user
export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    cpf: String,
    rg: String,
    address: String,
    password: String,
    walletAddress: String
})