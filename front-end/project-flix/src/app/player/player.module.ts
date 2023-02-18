import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material-module/material.module';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.componet';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [PlayerComponent],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ]
})

export class PlayerModule {

}