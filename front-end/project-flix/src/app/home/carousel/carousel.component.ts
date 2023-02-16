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
    
    @Input() movies = [{poster: "", genre: ""}]

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

    openDialog(){
        this.dialog.open(MovieDetailsComponent, {
            height: '500px',
            width: '800px',
            data: {
                title: 'Vingadores',
                synopsis: 'Quando o irmão malvado de Thor, Loki (Tom Hiddleston), ganha acesso ao poder ilimitado do cubo de energia chamado Tesseract, Nick Fury (Samuel L. Jackson), diretor da S.H.I.E.L.D., inicia um esforço de recrutamento de super-heróis para derrotar a ameaça sem precedentes à Terra. . Juntando-se ao "time dos sonhos" de Fury estão o Homem de Ferro (Robert Downey Jr.), o Capitão América (Chris Evans), o Hulk (Mark Ruffalo), Thor (Chris Hemsworth), a Viúva Negra (Scarlett Johansson) e o Gavião Arqueiro (Jeremy Renner).'
            },
          });
    }

}
