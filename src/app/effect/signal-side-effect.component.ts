import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { YelderService } from '../yelder.service';

@Component({
  selector: 'app-bsubject-computed-multiple-side-effect',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mt-3 text-center">
      <h3>Counter Value: {{ counter() }}</h3>
      <h3>Counter Value: {{ counter() }}</h3>
      <h3>Counter Value: {{ counter() }}</h3>
    </div>
  `
})
export class SignalSideEffectComponent {
  service = inject(YelderService);
  counter = toSignal<number, 0>(this.service.start$(), {initialValue: 0});

  constructor() {
    effect(() => console.log(`Triggered side effect as value of the signal called counter changed -> ${this.counter()}`));
  }
}
