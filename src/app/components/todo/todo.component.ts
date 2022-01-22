import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { Task } from 'src/app/interfaces/Task';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }


  onToggle(taskId: string) {
    const newTodo: Todo = JSON.parse(JSON.stringify(this.todo))
    const taskIdx = newTodo.tasks.findIndex((currTask: Task) => currTask.id === taskId)
    newTodo.tasks[taskIdx].isDone = !newTodo.tasks[taskIdx].isDone

    this.todoService.edit(newTodo)
  }

  onDeleteTask(taskId: string) {
    const newTodo: Todo = JSON.parse(JSON.stringify(this.todo))
    const taskIdx = newTodo.tasks.findIndex((currTask: Task) => currTask.id === taskId)
    newTodo.tasks.splice(taskIdx, 1)
    this.todoService.edit(newTodo)
  }
  
  onAddTask(taskTxt: string) {
    if(!taskTxt) return

    const newTodo: Todo = JSON.parse(JSON.stringify(this.todo))
    const newTask = this.todoService.getNewTask(taskTxt)
    newTodo.tasks.push(newTask)
    this.todoService.edit(newTodo)
  }
}
