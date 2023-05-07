/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { TokenReqDto } from './dtos/tokenReq.dto';
import { LoginDto } from './dtos/userReq.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

   /* 
        @dev endpoint to create a new user / send to user service
        @param user: object representing the user to be created
        @return the created user / error
    */
    @Post('create')
    async createUser(@Body() user: User){
        return this.userService.createUser(user);
    }

    @Post("createToken")
    async createUserToken(@Body() token: TokenReqDto) {
        return this.userService.createUserToken("renato.machado@sou.inteli.edu.br", token);
    }
    /* 
        @dev endpoint to check if the user login is valid / send to user service
        @param login: data transfer object representing the user login information
        @return the user's id / error
    */
    @Get('login')
    async userLogin(@Body() login: LoginDto) {
        return this.userService.userLogin(login);
    }
}
