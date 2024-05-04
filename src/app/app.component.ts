import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './actions/counter-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgRxPractice';

  constructor(private store: Store<{ count: number }>) {}
  count: Observable<number> = this.store.select('count');

  increment() {
    this.store.dispatch(increment());
  }
   
}
