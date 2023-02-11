import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatMenuModule
    ],

    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatMenuModule,
        MatGridListModule
    ]
})

export class MaterialModule {

}