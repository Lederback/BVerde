import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';
import { TokenReqDto } from './dtos/tokenReq.dto';
import { HathorService } from '../hathor/hathor.service';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        private readonly hathorService: HathorService,
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

    async createUserToken(userId: String, token: TokenReqDto) {
        try {
            const hathorResponse = await this.hathorService.createToken(token.tokenName, token.tokenSymbol, token.tokenAmount);
            
            if (hathorResponse.output == undefined) {
                return {
                    error: "Cannot create token",
                }
            }

            const user = await this.getUserByMail(userId);
            // user.token = token;

            // const newUser = await this.userModel.findByIdAndUpdate(userId, updateStudentDto, { new: true });
            // return await user.save();
            return "Foi";
        }
        catch (error) {
            return error;
        }
    }

    async getUserByMail(userId: String) {
        try {
            return await this.userModel.findById(userId).exec();
        }
        catch (error) {
            return error;
        }
    }
}
