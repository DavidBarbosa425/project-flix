import { SearchModule } from './../share/search/search.module';
import { MaterialModule } from './../material-module/material.module';
import { CarouselModule } from './carousel/carousel.module';
import { BannerCarouselModule } from './banner-carousel/banner-carousel.module';
import { FooterModule } from './footer/footer.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        BannerCarouselModule,
        CarouselModule,
        FooterModule,
        MaterialModule,
        SearchModule
    ],
    exports: [
        HomeComponent,
        BannerCarouselModule,
        CarouselModule,
        FooterModule,
    ]
})
export class HomeModule {

}