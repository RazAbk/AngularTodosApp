import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: todo[] = [
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


  constructor() { }

  ngOnInit(): void {
  }

}