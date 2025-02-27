   import { Observable } from 'rxjs';

    declare global {
      export type $<T = unknown> = Observable<T>;
    }
