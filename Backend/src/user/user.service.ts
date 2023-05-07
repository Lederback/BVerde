/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AnyArray, Model } from 'mongoose';
import { User } from './user';
import { TokenReqDto } from './dtos/tokenReq.dto';
import { HathorService } from '../hathor/hathor.service';
import { LoginDto } from './dtos/userReq.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        private readonly hathorService: HathorService,
    ) {}

    /* 
        @dev function to create a new user
        @param user: object representing the user to be created
        @return the created user / error
    */
    async createUser(user: User) {
        try {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            const userToken = await this.hathorService.getWalletId();

            user.walletAddress = userToken;

            const newUser = new this.userModel({ ...user, password: hashedPassword });
            await newUser.save();
            
            return {
                status: 200,
                message: "User created succesfully"
            } 
        }
        catch (error) {
            return error;
        }
    }

    async createUserToken(userEmail: string, token: TokenReqDto) {
        try {
            const hathorResponse = await this.hathorService.createToken(token.tokenName, token.tokenSymbol, token.tokenAmount);

            return {
                status: 200,
                message: "Token created"
            };
        }
        catch (error) {
            return error;
        }
    }

    async getUserByMail(userEmail: string) {
        try {
            return await this.userModel.findOne({ email: userEmail }).exec();
        }
        catch (error) {
            return error;
        }
    }

    /* 
        @dev function to check if the user login is valid
        @param login: data transfer object representing the user login information
        @return the user's id / error
    */
    async userLogin(login: LoginDto) {
        try {
            const user = this.userModel.findOne({ email: login.email }).exec();
            if (!user) {
                return "not Valid";
            }
            const id = (await user)._id;
            const isValidPassword = await bcrypt.compare(login.password, (await user).password);

            if (!isValidPassword) {
                return "not Valid";
              }
            
            return id;
        }
        catch (error) {
            return error;
        }

    }
}
