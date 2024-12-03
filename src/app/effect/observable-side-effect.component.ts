import {CommonModule} from '@angular/common';
import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {distinctUntilChanged, tap} from 'rxjs/operators';
import {YelderService} from '../yelder.service';
import {Observable, Subject} from "rxjs";

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
export class ObservableSideEffectComponent implements OnInit, OnDestroy {
  service = inject(YelderService);
  source$!: Observable<number>;
  private _destroy$ = new Subject<void>();

  ngOnInit() {
    this.source$ = this.service.count$().pipe(
      tap((i: number) => {
        // side effect triggered for each new value emitted and for each template subscription
        console.log(`Triggered side effect as source observable called counter emitted new value changed -> ${i}`)
      }),
      distinctUntilChanged()
    );
  }

  ngOnDestroy() {
    console.log('Subscriptions A destroyed!');
    this._destroy$.next();
    this._destroy$.complete();
  }
}
