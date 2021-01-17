import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from 'src/app/Model/todo';
import { TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() item:Todos;
  // @Output() deleteTodo: EventEmitter<Todos> = new EventEmitter();
  constructor(private todoService :TodoService) { }

  ngOnInit(): void {
  }
// set dynamic classes
setClasses(){
  let classes = {
    items: true,
    'is-complete': this.item.completed
  }
  return classes;
}

onDelete(item)
{
console.log("delete");
}
onToggle(item)
{ //Toggle in UI
  item.completed = ! item.completed
  //tOGGLE ON SERVER
  this.todoService.toggleCompleted(item).subscribe(item =>
    console.log(item));
  }
}
