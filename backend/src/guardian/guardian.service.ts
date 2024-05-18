import { Injectable } from '@nestjs/common';
import{GuardianDTO} from './guardian.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GuardianEntity } from './guardian.entity';

@Injectable()
export class GuardianService{
  constructor(@InjectRepository(GuardianEntity) private guardianRepository: Repository<GuardianEntity>) {}
   
  async createUser(guardian:GuardianEntity): Promise<GuardianEntity> {
    //const guardian = this.guardianRepository.create();
    return this.guardianRepository.save(guardian);
  }

  async modifyCountry(Id: number, newCountry: string): Promise<GuardianEntity> {
    const guardian = await this.guardianRepository.findOne({ where: { id: Id } });
    if (guardian) {
      guardian.country = newCountry;
      return this.guardianRepository.save(guardian);
    }
    return null;
  }

  async getUsersByJoiningDate(joiningDate: Date): Promise<GuardianEntity[]> {
    return this.guardianRepository.find({ where: { joiningDate } });
  }

  async getUsersWithDefaultCountry(): Promise<GuardianEntity[]> {
    return this.guardianRepository.find({ where: { country: 'Unknown' } });
  }

    








  //return parent info
   getUserByNameAndId(name: string, id: string): object {
    return { msg: "Name: " + name + "," + "Id: " + id };
}

//update parent info
updateUserNameAndId(name: string, id: string):object{
  return { msg: "Name: " + name + "," + " Id: " + id };
}

//view student info
getStudentNameAndId(name: string, id: string):object{
  return { msg: "Name: " + name + "," + " Id: " + id };
}

//update student info
updateStudentNameAndId(name: string, id: string):object{
  return { msg: "Name: " + name + "," + " Id: " + id };
}

//login

async login(guardianDTO:GuardianDTO): Promise<GuardianDTO> {
  const{Name,Email,Password,nidNumber,phoneNumber} = guardianDTO;
  return {Name,Email, Password,nidNumber,phoneNumber};
}


payRegistrationFee(studentId: string): object {
  return { msg: "Registration fee paid successfully for student with ID: " + studentId };
}

// View Student's Grade Reports
getStudentGrades(studentId: string): object {
  return { msg: "Grades for student with ID: " + studentId };
}

// Track Student's Class Attendance
getStudentAttendance(studentId: string): object {
  return { msg: "Attendance for student with ID: " + studentId };
}
/*
async parentInfo(guardianDTO:GuardianDTO): Promise<GuardianDTO> {
  const{Name,Email,Password,nidNumber,phoneNumber} = guardianDTO;
  return {Name,Email, Password,nidNumber,phoneNumber};
}
*/
}
