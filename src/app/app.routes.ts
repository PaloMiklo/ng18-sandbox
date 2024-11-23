import { Routes } from '@angular/router';
import { HomeComponent } from './_home/home.component';
import { SignalComponent } from './signal/signal.component';
import { BsubjectComponent } from './bsubject/bsubject.component';
import { ToSignalComponent } from './toSignal/toSignal.component';
import { BSubjetComputedComponent } from './bsubject/bsubject-computed.component';
import { SignalComputedComponent } from './signal/signal-computed.compontent';
import { BSubjetComputedMultipleComponent } from './bsubject/bsubject-computed-multiple.component';
import { SignalComputedMultipleComponent } from './signal/signal-computed-multiple.component';
import { ObservableSideEffectComponent } from './effect/observable-side-effect.component';
import { SignalSideEffectComponent } from './effect/signal-side-effect.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signal', component: SignalComponent },
    { path: 'signalComputed', component: SignalComputedComponent },
    { path: 'signalComputedMultiple', component: SignalComputedMultipleComponent },
    { path: 'signalSideEffect', component: SignalSideEffectComponent },
    { path: 'bsubject', component: BsubjectComponent },
    { path: 'toSignal', component: ToSignalComponent },
    { path: 'bsubjectComputed', component: BSubjetComputedComponent },
    { path: 'bsubjectComputedMultiple', component: BSubjetComputedMultipleComponent },
    { path: 'observableSideEffect', component: ObservableSideEffectComponent },
    { path: '**', component: HomeComponent },
];
