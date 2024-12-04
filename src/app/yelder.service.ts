import {Injectable} from '@angular/core';
import {interval, Observable, Subject} from 'rxjs';
import {shareReplay, startWith, takeUntil} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class YelderService {
  start$ = (): Observable<number> => interval(1500).pipe(
    startWith(0),
    shareReplay({
      refCount: true,
      bufferSize: 1
    }));
  random = (): number => Math.floor(Math.random() * 10);
}
