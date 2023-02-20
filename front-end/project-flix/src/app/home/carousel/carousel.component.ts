import { MovieModel } from './../models/movie.model';
import { MovieDetailsComponent } from './../movie-details/movie-details.component';
import { Component, Input, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent{

    constructor(
        private el: ElementRef,
        private dialog: MatDialog
        ){}
    
    @Input() movies: MovieModel[] = []

    currentItem = 0;
    controls: any
    items: any
    maxItems!: number
    timerId: any
    timerIdStop: any

    previous(): void{

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

    next(): void{

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

    openDialog(movie: MovieModel){
        this.dialog.open(MovieDetailsComponent, {
            height: '500px',
            width: '800px',
            data: movie
          });
    }

}
