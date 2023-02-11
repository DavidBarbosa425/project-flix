import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{

    constructor(private el: ElementRef){}
    
    @Input() movies = [{poster: "", genre: ""}]

    currentItem = 0;
    controls: any
    items: any
    maxItems!: number
    timerId: any
    timerIdStop: any

    previous() {

        this.controls = this.el.nativeElement
        this.items = this.el.nativeElement.querySelectorAll('.item')
        this.maxItems = this.items.length

        this.currentItem += 4
        
        if(this.currentItem >= this.maxItems){
            this.currentItem = 0
        }
        if(this.currentItem < 0){
            this.currentItem = this.maxItems -1
        }

        this.items[this.currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })
            
    }

    next(){

        this.controls = this.el.nativeElement
        this.items = this.el.nativeElement.querySelectorAll('.item')
        this.maxItems = this.items.length

        this.currentItem -= 4

        if(this.currentItem >= this.maxItems){
            this.currentItem = 0
        }
        if(this.currentItem < 0){
            this.currentItem = this.maxItems -1
        }

        this.items[this.currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })   

    }

}
