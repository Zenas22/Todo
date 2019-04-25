import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn Angular', 'After watching youtube tutorials, follow through on trying to create Lightleaf with it to see how to implement the new framework',new Date(2019,4,28)),
    new Todo(2, 'Buy charger', 'Travel to town and meet Kyalo for the charger and remember to bargain',new Date(2019,5,3)),
    new Todo(3, 'Get new battery', 'Caroline should replace current battery for free',new Date(2019,5,12)),
    new Todo(4, 'Start Athena in Angular', 'Test it out after learning Angular',new Date(2019,4,29)),
    new Todo(5, 'Create Light leaf website', 'Check to see whether the contract was signed',new Date(2019,5,19)),
    new Todo(6, 'Create eye8 website', 'Stay scheming',new Date(2019,5,22)),

  ]

  toogleScribble(index){
    this.todos[index].showScribble = !this.todos[index].showScribble;
  }

  deleteTodo(isDone,index){
    if (isDone){
      let toDelete=confirm(`Are you sure you want to delete ${this.todos[index].name}`)

      if (toDelete){
        this.todos.splice(index,1)
      }
    }
  }

  addNewTodo(todo){
    let todoLength = this.todos.length;
    todo.id = todoLength + 1;
    todo.completeDate = new Date(todo.completeDate);
    this.todos.push(todo)
  }
  constructor() { }

  ngOnInit() {
  }

}
