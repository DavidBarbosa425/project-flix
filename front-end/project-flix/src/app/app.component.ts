import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'project-flix';
  navbg:any

  ngOnInit(): void {

    let sidenav = document.querySelector('mat-sidenav-content')

    sidenav?.addEventListener('scroll', event => {
      

      if( sidenav?.scrollTop != undefined) {

        if(sidenav?.scrollTop > 0){

          this.navbg = {
            'background-color': 'black'
          }   
        }
        else{

          this.navbg = {
            'background': 'trasnparent'
          }
        }

      }
    })
    
    
  }




  
  
}
