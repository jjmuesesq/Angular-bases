import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponet } from './components/counter/counter.component';

@NgModule({
    declarations: [
        CounterComponet
    ],
    imports: [ CommonModule ],
    exports: [
        CounterComponet
    ],
    providers: [],
})

export class CounterModule {}