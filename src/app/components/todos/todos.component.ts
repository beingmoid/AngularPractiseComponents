import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { from } from 'rxjs';
import { Todos } from 'src/app/Model/todo';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todos[];
 
  constructor(private todosevices : TodoService) { }

  ngOnInit(): void {
   this.todosevices.getTodos().subscribe(todos => {
     this.todos=todos;

     console.log(this.todos[0].id)
   });
  }

}
