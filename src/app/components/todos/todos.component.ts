import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosItemComponent } from "../todos-item/todos-item.component";
import { AdTodoComponent } from "../ad-todo/ad-todo.component";
import { Todo } from '../../todos';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodosItemComponent, AdTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null = null;
  public todos: Todo[] = [];

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem !== null) {
      this.todos = JSON.parse(this.localItem) as Todo[];
    } else {
      this.todos = [];
    }
  }

  ngOnInit(): void {
    
  }

  deleteTodo(todo: Todo): void {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  addTodo(todo: Todo): void {
    console.log("Adding Todo:", todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}  