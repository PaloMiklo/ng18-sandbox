import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {distinctUntilChanged, tap} from 'rxjs/operators';
import {YelderService} from '../yelder.service';

@Component({
  selector: 'app-bsubject-computed-multiple-side-effect',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mt-3 text-center">

      <ng-container *ngIf="source$ | async as counterValue">
        <h3>Counter Value (subscription A): {{ counterValue }}</h3>
        <h3>Counter Value (subscription A): {{ counterValue }}</h3>
        <hr>
      </ng-container>

      <h3>Counter Value (subscription B): {{ source$ | async }}</h3>

    </div>
  `
})
export class ObservableSideEffectComponent {
  service = inject(YelderService);
  source$ = this.service.start$().pipe(
    tap((i: number) => console.log(`Triggered side effect as source observable called counter emitted new value changed -> ${i}`)),
    distinctUntilChanged()
  );
}
