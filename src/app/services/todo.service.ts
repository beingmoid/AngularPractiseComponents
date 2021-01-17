import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Todos } from "../Model/todo";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosLimit = '?_limit=5';
todosUrl:string = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
  constructor(private http:HttpClient) { }


// get todos
  getTodos():Observable<Todos[]>{
    return this.http.get<Todos[]>(`${this.todosUrl} ${this.todosLimit}`);
  }
  //toggle completed
  toggleCompleted(todo: Todos):Observable<Todos[]>{
    return this.http.get<Todos[]>(this.todosUrl);
  }
}
