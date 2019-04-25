import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Todo} from '../todo'

@Component({
  selector: 'app-todo-scribble',
  templateUrl: './todo-scribble.component.html',
  styleUrls: ['./todo-scribble.component.css']
})
export class TodoScribbleComponent implements OnInit {

  @Input() todo:Todo;
  @Output() isDone = new EventEmitter<boolean>();

  todoDelete(done:boolean){
    this.isDone.emit(done);
  }
  constructor() { }

  ngOnInit() {
  }

}
