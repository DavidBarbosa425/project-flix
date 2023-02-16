import { MaterialModule } from './../material-module/material.module';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.componet';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [PlayerComponent],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        PlayerComponent
    ]
})

export class PlayerModule {

}