import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[]
  plusicon = faPlusSquare

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }


  onAddTodo() {
    const title = prompt('todo title:')
    this.todoService.addTodo(title)
  }
}
