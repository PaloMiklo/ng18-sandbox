import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-bsubject',
  standalone: true,
  template: `
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-primary me-3" (click)="increment()">Increment</button>
      <button type="button" class="btn btn-primary me-3" (click)="decrement()">Decrement</button>
    </div>
    <div class="mt-3 text-center">
      <h3>Counter Value: {{ counterBehaviorSubject.value }}</h3>
    </div>
  `
})
export class BsubjectComponent {
  counterBehaviorSubject = new BehaviorSubject<number>(0);

  increment() { this.counterBehaviorSubject.next(this.counterBehaviorSubject.value + 1); }
  decrement() { this.counterBehaviorSubject.next(this.counterBehaviorSubject.value - 1); }
}
