import { CommonModule } from '@angular/common';
import { BannerCarouselComponent } from './banner-carousel.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [BannerCarouselComponent],
    imports: [
        CommonModule
    ],
    exports: [
        BannerCarouselComponent,
    ]
})
export class BannerCarouselModule {

}