import { Controller,Delete,Get, Options, Patch, Post, Put } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController{
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string{
        return this.appService.getHello();
    }
    @Get('/hello')
    getMyHello(): object{
        return this.appService.getMyHello();
    }
    @Post('/add')
    addMe(): object{
        return this.appService.addMe();
    }
    @Patch('/add')
    updateMe(): object{
        return this.appService.updateMe();
    }
    @Put('/add')
    updateMeByPut(): object{
        return this.appService.updateMeByPut();
      }
    @Delete('/add')
    deleteMe():object{
        return this.appService.deleteMe();
    }
    @Options('/add')
    options():object{
        return this.appService.options();
    }
    
    }

