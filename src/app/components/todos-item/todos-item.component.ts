import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todos';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-todos-item',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.css'
})
export class TodosItemComponent {
    @Input()  todo!: Todo;
    @Input()  i!: Number;
    @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
    @Output() todoCheckBox:EventEmitter<Todo> = new EventEmitter();
  constructor(){ }
  
Onclick(todo:Todo){
 this.todoDelete.emit(todo);
  console.log("on click has been trigered")
}
onCheckboxClick(todo:Todo){
   this.todoCheckBox.emit(todo);
}
}
