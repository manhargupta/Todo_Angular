import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tododisplay',
  templateUrl: './tododisplay.component.html',
  styleUrls: ['./tododisplay.component.css']
})
export class TododisplayComponent{

  @Input() todoList;
  @Output() result = new EventEmitter<any>();

  updateStatus(event){
    event.done=!event.done
  }
  editData(id){
    $("#"+id).prop('disabled', false);
  }
  updateList()
  {
    this.result.emit(this.todoList)
  }
}
