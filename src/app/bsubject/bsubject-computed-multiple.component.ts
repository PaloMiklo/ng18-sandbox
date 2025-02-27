import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { YelderService } from "../yelder.service";

@Component({
  selector: 'app-bsubject-computed-multiple',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-primary me-3" (click)="changeValues()">Change values</button>
    </div>
    <div class="mt-3 text-center">
      <h3>Counter Value Doubled: {{ double$ | async }}</h3>
      <h3>Counter Value Doubled: {{ double$ | async }}</h3>
      <h3>Counter Value Doubled: {{ double$ | async }}</h3>
    </div>
  `
})
export class BSubjetComputedMultipleComponent {
  service = inject(YelderService);

  counterBehaviorSubject1 = new BehaviorSubject<number>(0);
  counterBehaviorSubject2 = new BehaviorSubject<number>(0);


  changeValues() {
    this.counterBehaviorSubject1.next(this.service.random());
    this.counterBehaviorSubject2.next(2);
  }

  double$ = combineLatest([this.counterBehaviorSubject1, this.counterBehaviorSubject2]).pipe(
    // <>
    map(([v1, v2]) => {
      const val = v1 * v2;
      console.log(`Combine latest triggered: ${v1} * ${v2} = ${val}`);
      return val;
    }),
    share()
  );
}
