import { Component } from '@angular/core';
import {todoI} from './Todo'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos:todoI[]= [];

  update(arr){
    this.todos=arr;
  }

  clear(){
    for(let i=this.todos.length-1; i>=0;i--) {
      if(this.todos[i].done){
         this.todos.splice(i,1);
      }
    }

    this.todos.forEach((v:todoI,i:number)=>{
      v.id=i;
    })
  }
  updateStatus(event){
    event.done=!event.done
  }
}
