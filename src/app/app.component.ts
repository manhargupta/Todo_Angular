import {Component, OnInit} from '@angular/core';
import {todoI} from './Todo'
import * as $ from 'jquery';
import {TodoServiceService} from './todo-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoServiceService]
})
export class AppComponent implements OnInit{
  todos:todoI[]= [];
  _listFilter:string;
  filteredTodos:todoI[];

  ngOnInit(){
    this.todos=this._todoServiceService.getTodos();
    this.filteredTodos=this.todos;
  }

  constructor(private _todoServiceService:TodoServiceService){
  }

  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter=value;
    this.filteredTodos=this._listFilter? this.performFilter(this._listFilter):this.todos;
  }

  performFilter(filterBy:string):todoI[]{
      filterBy=filterBy.toLowerCase();
      return this.todos.filter((todo:todoI)=>
        todo.task.toLowerCase().indexOf(filterBy)!== -1
      )
  }

  update(arr){
    this.todos=arr;
  }

  updateList(arr){
    this.todos=arr;
    $(".updateTextBox").prop('disabled', true);
    alert('Updated Successfully')
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


}
