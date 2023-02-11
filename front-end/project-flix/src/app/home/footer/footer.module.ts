import { MaterialModule } from './../../material-module/material.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

import { NgModule } from '@angular/core';
@NgModule({
    declarations: [FooterComponent],
    imports:[
        CommonModule,
        MaterialModule
    ],
    exports: [FooterComponent]

})
export class FooterModule {

}