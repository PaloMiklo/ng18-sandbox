import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class YelderService {
  private increment$ = interval(1500).pipe(startWith(0))

  star$ = (): Observable<number> => this.increment$;
}
