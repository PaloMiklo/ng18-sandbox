import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

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
    </div>
  `
})
export class BSubjetComputedMultipleComponent {
    counterBehaviorSubject1 = new BehaviorSubject<number>(0);
    counterBehaviorSubject2 = new BehaviorSubject<number>(0);

    changeValues() {
        this.counterBehaviorSubject1.next(Math.random());
        this.counterBehaviorSubject2.next(2);
    }

    double$ = combineLatest([this.counterBehaviorSubject1, this.counterBehaviorSubject2]).pipe(
        map(([v1, v2]) => v1 * v2),
        map(((value: number) => {
            // emitted for each change of any source observable -> diamond problem -> emitts incorrect/transient value
            console.log("Combine latest triggered: ", value);
            return value;
        }))
    );
}