import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:any;
  constructor(private todoService:TodoService) { }
  ngOnInit(): void {
    this.getTodos();

  }
  getTodos() {
    this.todoService.getTodos().subscribe(response => {
      this.todos = response;
      console.log("todos",this.todos);
    });

  }
  delete(id:number) {
    if(confirm("vous êtes sûr de vouloir supprimer ce todo ?"))
    {
    this.todoService.deleteTodo(id).subscribe(response => {
      console.log("response",response);
      console.log("deleted"+id)
      this.getTodos();
    });
  }
  }

}
