/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { LoginDto } from './dtos/userReq.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Post('create')
    async createUser(@Body() user: User){
        return this.userService.createUser(user);
    }

    @Get('login')
    async userLogin(@Body() login: LoginDto) {
        return this.userService.userLogin(login);
    }
}
