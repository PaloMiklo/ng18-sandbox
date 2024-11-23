import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
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
      <h3>Counter Value Doubled: {{ double() }}</h3>
    </div>
  `
})
export class SignalComputedMultipleComponent {
    signal1 = signal<number>(0);
    signal2 = signal<number>(0);

    changeValues() {
        this.signal1.set(Math.random());
        this.signal2.set(2);
    }

    double = computed(() => {
        // glitch free computation -> computation happens in an atomic manner, avoids the diamond problem and transient computations
        console.log("Computed Signal Triggered");
        return this.signal1() * this.signal2();
    });
}