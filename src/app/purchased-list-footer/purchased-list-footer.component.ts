import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-purchased-list-footer',
  templateUrl: './purchased-list-footer.component.html',
  styleUrls: ['./purchased-list-footer.component.css']
})
export class PurchasedListFooterComponent {


  @Input()
  todos: Todo[];

  constructor() {
  }

}
