import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from './interfaces/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: Todo[] = []
  todosSubscription: Subscription

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.query()
    this.todosSubscription = this.todoService.todos$.subscribe((todos: Todo[]) => {
      this.todos = todos
    })
  }

}
