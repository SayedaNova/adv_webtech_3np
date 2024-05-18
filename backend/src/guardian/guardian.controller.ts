import { Controller, Get, Param, Put, Query, Post,Body, UsePipes,ValidationPipe,Res,
    UseInterceptors, UploadedFile } from "@nestjs/common";
import {GuardianService} from './guardian.service';
import{ GuardianDTO } from './guardian.dto';
import { GuardianEntity } from './guardian.entity';
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";

@Controller('/guardian')
export class GuardianController{
    constructor(private readonly guardianService: GuardianService){}
//route parameters

@Post('createuser')
  async createUser(@Body() guardian: GuardianEntity): Promise<GuardianEntity> {
    return this.guardianService.createUser(guardian);
  }

  @Put('modify-country/:id')
  async modifyCountry(@Param('id') id: number, @Body('newCountry') newCountry: string): Promise<GuardianEntity | null> {
    return this.guardianService.modifyCountry(id, newCountry);
  }

  @Get('users-by-joining-date/:joiningDate')
  async getUsersByJoiningDate(@Param('joiningDate') joiningDate: Date): Promise<GuardianEntity[]> {
    return this.guardianService.getUsersByJoiningDate(new Date(joiningDate));
  }

  @Get('users-with-default-country')
  async getUsersWithDefaultCountry(): Promise<GuardianEntity[]> {
    return this.guardianService.getUsersWithDefaultCountry();
  }







//view parent info
    @Get('parent/:name/:id')
    getUserByNameAndId(@Param('name') name: string, @Param('id') id: string): object {
    return this.guardianService.getUserByNameAndId(name, id);
}

//update parent info
    @Put('parent/:name/:id')
    updateUserNameAndId(@Param('name') name: string, @Param('id') id: string): object {
        return this.guardianService.updateUserNameAndId(name, id);
    }
    
//view Student info
@Get('student/')
//we don't send query result with post
//Must use @Body for @Post - create json object first
getStudentNameAndId(@Query('name') name: string, 
@Query('id') id:string): object{
    return this.guardianService.getStudentNameAndId(name, id);
}

//update student info
@Put('student/:name/:id')
updateStudentNameAndId(@Param('name') name: string, @Param('id') id: string): object {
    return this.guardianService.updateStudentNameAndId(name, id);
}

//need four more routes

/*
@Post('login')
//we don't send query result with post
//Must use @Body for @Post - create json object first
login(@Body() credentials: { username: string, password: string }): object {
    return this.guardianService.login(credentials.username,credentials.password);
}
*/


@Post('login')
@UsePipes(new ValidationPipe)
async login(@Body() guardianDTO:GuardianDTO): Promise<GuardianDTO> {
    return this.guardianService.login(guardianDTO);
}

@Post('uploadNID')
@UseInterceptors(FileInterceptor('myfile',
{ fileFilter: (req, file, cb) => {
  if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
   cb(null, true);
  else {
   cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
   }
  },
  limits: { fileSize: 2 * 1024 * 1024 }, //file size not more than 2MB
  storage:diskStorage({
  destination: './upload',
  filename: function (req, file, cb) {
   cb(null,Date.now()+file.originalname)
  },
  })
}
))
/*
@Get('/getimage/:name')
    getImages(@Param('name') name:string, @Res() res) {
    res.sendFile(name,{ root: './upload' })
    }*/

    @Get('/getimage/:name')
getImages(@Param('name') name: string, @Res() res) {
    const imagePath = './upload/${name}';
    res.sendFile(imagePath, { root: '.' });
}


    // Route to pay student's registration fee
    @Post('student/pay-registration-fee')
    payRegistrationFee(@Body() requestBody: { studentId: string }): object {
        const { studentId } = requestBody;
        return this.guardianService.payRegistrationFee(studentId);
    }

@Get('student/:studentId/grades')
getStudentGrades(@Param('studentId') studentId: string): object {
    return this.guardianService.getStudentGrades(studentId);
}

@Get('student/:studentId/attendance')
getStudentAttendance(@Param('studentId') studentId: string): object {
    return this.guardianService.getStudentAttendance(studentId);
}



}

//view parent info
/*
@Post('parentInfo')
@UsePipes(new ValidationPipe)
async parentInfo(@Body() guardianDTO : GuardianDTO): Promise<GuardianDTO> {
    return this.guardianService.parentInfo(guardianDTO);
}
*/

