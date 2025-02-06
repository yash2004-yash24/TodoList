import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../todos';
@Component({
  selector: 'app-ad-todo',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './ad-todo.component.html',
  styleUrl: './ad-todo.component.css'
})
export class AdTodoComponent {
  title: string = ''; // 
  desc: string = ''; // 

  
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  

  onSubmit() {
    const todo: Todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true,
      indexOf: function (): unknown {
        throw new Error('Function not implemented.');
      }
    };
    this.todoAdd.emit(todo);
  }
}