import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    loadComponent: () =>
      import('./_home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'signal',
    loadComponent: () =>
      import('./signal/signal.component').then((m) => m.SignalComponent),
  },
  {
    path: 'signalComputed',
    loadComponent: () =>
      import('./signal/signal-computed.compontent').then(
        (m) => m.SignalComputedComponent
      ),
  },
  {
    path: 'signalComputedMultiple',
    loadComponent: () =>
      import('./signal/signal-computed-multiple.component').then(
        (m) => m.SignalComputedMultipleComponent
      ),
  },
  {
    path: 'signalSideEffect',
    loadComponent: () =>
      import('./effect/signal-side-effect.component').then(
        (m) => m.SignalSideEffectComponent
      ),
  },
  {
    path: 'bsubject',
    loadComponent: () =>
      import('./bsubject/bsubject.component').then((m) => m.BsubjectComponent),
  },
  {
    path: 'toSignal',
    loadComponent: () =>
      import('./toSignal/toSignal.component').then((m) => m.ToSignalComponent),
  },
  {
    path: 'bsubjectComputed',
    loadComponent: () =>
      import('./bsubject/bsubject-computed.component').then(
        (m) => m.BSubjetComputedComponent
      ),
  },
  {
    path: 'bsubjectComputedMultiple',
    loadComponent: () =>
      import('./bsubject/bsubject-computed-multiple.component').then(
        (m) => m.BSubjetComputedMultipleComponent
      ),
  },
  {
    path: 'observableSideEffect',
    loadComponent: () =>
      import('./effect/observable-side-effect.component').then(
        (m) => m.ObservableSideEffectComponent
      ),
  },
  {path: '**', redirectTo: '/home'},
];
