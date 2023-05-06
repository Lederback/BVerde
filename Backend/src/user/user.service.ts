import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
    ) {}

    async getAll() {
        
        try {
            return await this.userModel.find().exec();
        }
        catch (error) {
            return error;
        }

    }

    async createUser(user: User) {
        try {
            const newUser = new this.userModel(user);
            
            return await newUser.save();
        }
        catch (error) {
            return error;
        }
    }
}
