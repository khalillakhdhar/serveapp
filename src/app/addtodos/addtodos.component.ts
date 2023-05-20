import { Component } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.css']
})
export class AddtodosComponent {
  todo: any = {};
  constructor(private todoService:TodoService) { }
  addTodo() {
    this.todo.completed = false;
    this.todo.userId=1;
   //this.todoService.addTodo(this.todo);
   // suffisant pour ajouter un todo dans la liste des todos
    // mais pas suffisant pour l'afficher dans la liste des todos
    this.todoService.addTodo(this.todo).subscribe(response => {
      console.log("response",response);
      this.todo={};
      //this.todos = response;
      //console.log("todos",this.todos);
    });
    }

  }


