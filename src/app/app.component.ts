import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { TodosItemComponent } from './components/todos-item/todos-item.component';
import { FormsModule } from '@angular/forms';
@Component({ 
  selector: 'app-root',
  standalone: true,
 templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[TodosComponent,FormsModule]
  
})
export class AppComponent {
  title ='_todo lists';
    constructor(){  
      // setTimeout(() => {
      //    }, 2000);
}
}
