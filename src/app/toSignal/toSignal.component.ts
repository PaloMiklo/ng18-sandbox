import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {YelderService} from '../yelder.service';

@Component({
  selector: 'app-signal',
  standalone: true,
  template: `
    <div class="mt-3 text-center">
      <h3>Counter Value: {{ counter() }}</h3>
    </div>
  `
})
export class ToSignalComponent {
  service = inject(YelderService);
  counter = toSignal<number, number>(this.service.start$(), {initialValue: 0}); // -> turns $ into signal
}
