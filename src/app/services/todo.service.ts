import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private TODOS_DB: Todo[] = [
    {
      id: 'bfg5r4vr4',
      title: 'Do stuff',
      tasks: [
        {
          id: 'gbr42rf',
          description: 'Do that thing',
          isDone: false
        },
        {
          id: 'vbrf43ce2',
          description: 'Do something about it',
          isDone: true
        },
        {
          id: 'vbrf43cfdsafe2',
          description: 'Go somewhere',
          isDone: false
        }
      ]
    },
    {
      id: 'bfg5r4vfdsar5',
      title: 'Do a thing with it',
      tasks: [
        {
          id: 'gbrf42rf',
          description: 'Do that thing',
          isDone: true
        },
        {
          id: 'vbarf43ce2',
          description: 'Do something about it',
          isDone: false
        },
        {
          id: 'vbrf4a3cfdsafe2',
          description: 'Go somewhere',
          isDone: false
        }
      ]
    },
    {
      id: 'bfg5r4afsdfvfdsar5',
      title: 'Do a thing with it',
      tasks: [
        {
          id: 'gbrfasdf42rf',
          description: 'Do that thing',
          isDone: true
        },
        {
          id: 'vbarasdff43ce2',
          description: 'Do something about it',
          isDone: true
        },
        {
          id: 'vbrf4a3asdfcfdsafe2',
          description: 'Go somewhere',
          isDone: false
        }
      ]
    },
    {
      id: 'bfg5r4afsdfvasdfasdffdsar5',
      title: 'Do a thing with it',
      tasks: [
        {
          id: 'gbrfasdf4asdf2rf',
          description: 'Do that thing',
          isDone: false
        },
        {
          id: 'vbarasdasdfff43ce2',
          description: 'Do something about it',
          isDone: true
        },
        {
          id: 'vbrf4a3asdfasdfcfdsafe2',
          description: 'Go somewhere',
          isDone: false
        }
      ]
    },
    {
      id: 'bfasdfg5r4afsdfvasdfasdffdsar5',
      title: 'Do a thing with it',
      tasks: [
        {
          id: 'gbrfasdfasdf4asdf2rf',
          description: 'Do that thing',
          isDone: false
        },
        {
          id: 'vbarasdasdfasdfff43ce2',
          description: 'Do something about it',
          isDone: false
        },
        {
          id: 'vbrf4asdfa3asdfasdfcfdsafe2',
          description: 'Go somewhere',
          isDone: true
        }
      ]
    },
    {
      id: 'bfasd5r4afsdfvasdfasdffdsar5',
      title: 'Do a thing with it',
      tasks: [
        {
          id: 'gbasdfasdf4asdf2rf',
          description: 'Do that thing',
          isDone: false
        },
        {
          id: 'vbadasdfasdfff43ce2',
          description: 'Do something about it',
          isDone: false
        },
        {
          id: 'vbrfdfa3asdfasdfcfdsafe2',
          description: 'Go somewhere',
          isDone: false
        }
      ]
    }
  ]
  
  constructor() {
    const isTodos = localStorage.getItem('todos')
    if(!isTodos){
      localStorage.setItem('todos', JSON.stringify(this.TODOS_DB))
    }
  }

  private _TODOS: Todo[] = JSON.parse(localStorage.getItem('todos')) || []

  private _todos$ = new BehaviorSubject([])
  public todos$ = this._todos$.asObservable()

  public query() {
    this._todos$.next(this._TODOS)
  }

  public edit(todo: Todo) {
    const todos = JSON.parse(localStorage.getItem('todos')) || []
    const todoIdx = todos.findIndex((currTodo: Todo) => currTodo.id === todo.id)
    todos[todoIdx] = todo
    localStorage.setItem('todos', JSON.stringify(todos))
    this._todos$.next(todos)
    return of(todos)
  }
  
  public delete(todoId: string) {
    const todos = JSON.parse(localStorage.getItem('todos')) || []
    if(todos.length === 0) return
    
    const todoIdx = todos.findIndex((currTodo: Todo) => currTodo.id === todoId)
    todos.splice(todoIdx, 1)
    
    localStorage.setItem('todos', JSON.stringify(todos))
    this._todos$.next(todos)
    return of(todos)
  }

  public getNewTask(taskTxt: string) {
    return {
      id: this._makeId(),
      description: taskTxt,
      isDone: false
    }
  }

  public addTodo(title: string) {
    const todos = JSON.parse(localStorage.getItem('todos')) || []
    
    todos.push({
      id: this._makeId(),
      title: title,
      tasks: []
    })
    
    localStorage.setItem('todos', JSON.stringify(todos))
    this._todos$.next(todos)
    return of(todos)
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}
