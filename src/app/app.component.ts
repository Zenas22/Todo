import { Component } from '@angular/core';
import {Todo} from './todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos = [
    new Todo(1, 'Learn Angular', 'After watching youtube tutorials, follow through on trying to create Lightleaf with it to see how to implement the new framework',new Date(2019,4,28)),
    new Todo(2, 'Buy charger', 'Travel to town and meet Kyalo for the charger and remember to bargain',new Date(2019,5,3)),
    new Todo(3, 'Get new battery', 'Caroline should replace current battery for free',new Date(2019,5,12)),
    new Todo(4, 'Start Athena in Angular', 'Test it out after learning Angular',new Date(2019,4,29)),
    new Todo(5, 'Create Light leaf website', 'Check to see whether the contract was signed',new Date(2019,5,19)),
    new Todo(6, 'Create eye8 website', 'Stay scheming',new Date(2019,5,22)),

  ]

}
