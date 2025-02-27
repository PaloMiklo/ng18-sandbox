import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
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
      <h3>Counter Value Doubled: {{ double() }}</h3>
      <h3>Counter Value Doubled: {{ double() }}</h3>
      <h3>Counter Value Doubled: {{ double() }}</h3>
      <h3>Counter Value Doubled: {{ double() }}</h3>
      <h3>Counter Value Doubled: {{ double() }}</h3>
      <h3>Counter Value Doubled: {{ double() }}</h3>
    </div>
  `
})
export class SignalComputedMultipleComponent {
  private readonly service = inject(YelderService);

  signal1 = signal<number>(0);
  signal2 = signal<number>(0);

  changeValues() {
    this.signal1.set(this.service.random());
    this.signal2.set(2);
  }

  double = computed(() => {
    const val = this.signal1() * this.signal2();
    console.log(`Computed Signal Triggered ${this.signal1()} * ${this.signal2()} = ${val}`);
    return val;
  });
}
