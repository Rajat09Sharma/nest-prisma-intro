import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UpdateUserSettingDto } from './dtos/update-user-setting.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Patch(":id")
    updateUserById(@Body() updateUserDto: UpdateUserDto, @Param('id', ParseIntPipe) id: number) {
        return this.userService.updateUserById(updateUserDto, id)
    }

    @Get(":id")
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUserById(id);
    }

    @Delete(":id")
    deleteUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUserById(id);
    }

    @Patch(":id/setting")
    updateUserSettingByUserId(@Body() updateUserSettingDto:UpdateUserSettingDto,@Param("id",ParseIntPipe)id:number){
        return this.userService.updateUserSettingById(updateUserSettingDto,id);
    }
}
