import { SearchDirective } from './search.directive';

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        SearchDirective
    ],
    imports: [
        CommonModule,

        
    ],
    exports: [
        SearchDirective,
        CommonModule,

    ],

})

export class SearchModule {

}