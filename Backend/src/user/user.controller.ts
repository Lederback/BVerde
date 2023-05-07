import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { TokenReqDto } from './dtos/tokenReq.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Get()
    async getAllUsers() {
        return this.userService.getAll();
    }

    @Post()
    async createUser(@Body() user: User){
        return this.userService.createUser(user);
    }

    @Post("createToken")
    async createUserToken(@Body() token: TokenReqDto) {
        return this.userService.createUserToken("renato.machado@sou.inteli.edu.br", token);
    }
}
