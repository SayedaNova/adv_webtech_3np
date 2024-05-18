import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getUser(): object {
    return {msg: "Hello World!"};
  }
  getUserById(id:string):object{
    return {msg: "Your Id is: " + id};
  }
  getUserByNameAndId(name:string, id:string): object{
    return {msg: "Name: "+name + "Id: "+id};
  }
  addUser(myobj:object):object{
    return myobj;
  }
  /*
  updateUser(id: number, myobj:object):object{
    return {msg: "User updated successfully!", id, myobj};
  }
  */

  updateUser(id: number, myobj: { user: { name: string; id:number; username: string } }): object {
    
    return { msg: 'User updated successfully!', id, myobj };
  
  /*
  updateUserByParam(id: number, myobj:object):object{
    return {msg: "User updated successfully!", id, myobj};
  }
  */


}
}
