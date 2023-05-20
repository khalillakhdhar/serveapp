import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private fakeAPIUrl = 'https://jsonplaceholder.typicode.com/todos';


  constructor(private http: HttpClient) { }
  getTodos() {
    return this.http.get(this.fakeAPIUrl).pipe(map(response => response) // response is an array
    // pipe() méthode de RxJS qui permet d'enchainer les opérations lecture de get puis map
    // map() méthode de RxJS qui permet de transformer les données reçues en paramètre de tableau



    );
  }
  // addTodo()
  addTodo(data: any) {
  return this.http.post<any>(this.fakeAPIUrl,data).pipe(map(response => response));
   // response is an array

  }

}
