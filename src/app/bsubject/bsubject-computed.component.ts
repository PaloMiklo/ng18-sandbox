import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-bsubject-computed',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-primary me-3" (click)="increment()">Increment</button>
      <button type="button" class="btn btn-primary me-3" (click)="decrement()">Decrement</button>
    </div>
    <div class="mt-3 text-center">
      <h3>Counter Value Doubled: {{ double$ | async }}</h3>
    </div>
  `
})
export class BSubjetComputedComponent {
    counterBehaviorSubject$ = new BehaviorSubject<number>(0);

    increment() { this.counterBehaviorSubject$.next(this.counterBehaviorSubject$.value + 1); }
    decrement() { this.counterBehaviorSubject$.next(this.counterBehaviorSubject$.value - 1); }

    double$ = this.counterBehaviorSubject$.pipe(map((i: number) => i * 2));
}
