import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { YelderService } from '../yelder.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bsubject-computed-multiple-side-effect',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mt-3 text-center">
      <h3>Counter Value: {{ source$ | async }}</h3>
      <h3>Counter Value: {{ source$ | async }}</h3>
    </div>
  `
})
export class ObservableSideEffectComponent {
  service = inject(YelderService);
  source$ = this.service.star$().pipe(
    tap((i: number) => {
      // side effect triggered for each new value emitted and for each template subscription 
      console.log(`Triggered side effect as source observable called counter emitted new value changed -> ${i}`)
    })
  );
}