import { Body, Controller,Get, Param, Query,Post ,Put} from "@nestjs/common";
import { AdminService } from "./admin.service";


@Controller('/admin')
export class AdminController{
    constructor(private readonly adminService: AdminService) {}
    //route parameters
    @Get()
    getUser(): object{
        return this.adminService.getUser();
    }
    @Get('users/:id')
    getUserById(@Param('id') id: string): object {
        return this.adminService.getUserById(id);
    }

    @Get('users/')
    getUserByNameAndId(@Query('name') name: string, 
    @Query('id') id:string): object{
        return this.adminService.getUserByNameAndId(name, id);
    }

    @Post('adduser')
    addUser(@Body() myobj:{user:{name: string; id: number; username: string }}):object{
        console.log(myobj.user.name);
        return this.adminService.addUser(myobj);
    }

    @Put('updateuser/:id')
    updateUser(@Param('id') id: number, 
    @Body() myobj: {user:{ name: string; id:number; username: string }})
    :object{
        console.log(myobj.user.id);
        return this.adminService.updateUser(id, myobj);
    }

    


/*
    @Put('updateuser/')
    updateUser(@Query('id') id: number, 
    @Body() myobj: {user: {name:string; id:number; username:string}}): object{
        console.log(myobj.user.id);
        return this.adminService.updateUser(id, myobj);
    }
*/

}

