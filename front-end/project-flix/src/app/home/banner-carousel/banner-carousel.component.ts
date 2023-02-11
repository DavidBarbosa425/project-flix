import { Banner } from './banner';
import { Component, Input, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.css']
})

export class BannerCarouselComponent implements OnInit
{
  
  constructor(private el: ElementRef){}

  ngOnInit(): void {

    this.startTimer()

    let sidenav = document.querySelector('mat-sidenav-content')

    sidenav?.addEventListener('scroll', event => {

      if(sidenav?.scrollTop != undefined){
        if(sidenav.scrollTop > 0){

          this.stopTimer() 
          
        }
        else{

          this.restartTimer()
        }
      }
    })
    
  }

  @Input() banners: Banner[] = [];
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

      this.currentItem += 1
    
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

      this.currentItem -= 1

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

    startTimer(){
      this.timerId = setTimeout(() => {
        this.next()
        this.startTimer()
      }, 3000);
      
    }

    restartTimer() {
      clearTimeout(this.timerId)
      this.timerId = setTimeout(() => {
          this.startTimer()
      }, 3000);
    }

    stopTimer(){
      clearTimeout(this.timerId)
    }


    

  }
  
