import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  template: `
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-primary me-3" (click)="increment()">Increment</button>
      <button type="button" class="btn btn-primary me-3" (click)="decrement()">Decrement</button>
    </div>
    <div class="mt-3 text-center">
      <h3>Counter Value: {{ counterSignal() }}</h3>
    </div>
  `
})
export class SignalComponent {
  counterSignal = signal(0);

  increment() { this.counterSignal.update((i: number) => i + 1); }
  decrement() { this.counterSignal.update((i: number) => i - 1); }
}
