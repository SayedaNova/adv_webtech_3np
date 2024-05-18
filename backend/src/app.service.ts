import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMyHello(): object {
    return {msg: "Hello again!"};
  }
  addMe(): object{
    return {msg: "pls add me."};
  }
  updateMe(): object{
    return {msg: "patched."};
  }
  updateMeByPut(): object{
    return {msg: "stay 'put' get it??"};
  }
  deleteMe(): object{
    return {msg: "delete my existence."};
  }
  options(): object{
    return {msg: "what options do i have?"};
  }
}
