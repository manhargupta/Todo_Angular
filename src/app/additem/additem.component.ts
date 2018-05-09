import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {todoI} from '../Todo'

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent{

    @Input() todoList;
    @Output() result = new EventEmitter<any>();

  addTaskEnter(keyEvent, newTask:string):void{
    if (keyEvent.which === 13){
      this.addTask(newTask)
    }
  }
  addTask(newTask:string):void{
    this.todoList.push({'task':newTask,'done':false})
    this.result.emit(this.todoList)
    this.todoList.forEach((v:todoI,i:number)=>{
      v.id=i;
    })
  }
}
