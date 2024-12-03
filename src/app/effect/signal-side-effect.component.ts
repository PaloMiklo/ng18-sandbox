import {CommonModule} from '@angular/common';
import {Component, effect, inject} from '@angular/core';
import {YelderService} from '../yelder.service';
import {toSignal} from '@angular/core/rxjs-interop';

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
  counter = toSignal<number, number>(this.service.count$(), {initialValue: 0});

  constructor() {
    // distinct until changed by default -> setting the same value twice in a row won't trigger the effect
    effect(() => console.log(`Triggered side effect as value of the signal called counter changed -> ${this.counter()}`));
  }

}
