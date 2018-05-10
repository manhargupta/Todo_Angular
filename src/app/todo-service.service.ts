import { Injectable } from '@angular/core';
import {todoI} from "./Todo";

@Injectable()
export class TodoServiceService {

    getTodos():todoI[]{
      return [{'id':0,'task':'hello service',done:false}]
  }

}

