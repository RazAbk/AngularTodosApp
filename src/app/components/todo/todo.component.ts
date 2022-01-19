import { Component, OnInit, Input } from '@angular/core';
import { todo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: todo

  constructor() { }

  ngOnInit(): void {
  }


  onToggle() {
    console.log('hey!')
  }
}
