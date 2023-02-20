import { Router } from '@angular/router';
import { MovieService } from './services/movie.service';
import { MovieModel } from './models/movie.model';
import { BannerCarouselService } from './banner-carousel/banner-carousel.service';
import { Banner } from './banner-carousel/banner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private bannerService: BannerCarouselService,
    private movieSevice: MovieService,
    private router: Router
    ) {}

  moviesAction: MovieModel[] = []

  moviesComedy: MovieModel[] = []

  lastMoviesAdded: MovieModel[] = []

  banners: Banner[] = []

  navbg:any

  ngOnInit(): void {
    
      this.bannerService.getBanners()
      .subscribe(banners => {

        this.banners = banners
      })

      setTimeout(() => {

        this.movieSevice.getMovie()
        .subscribe(movie => {

            this.moviesAction = movie.filter(function(movie){
              return movie.movieGenre === 'ação'
            })

            this.moviesComedy = movie.filter(function(movie){
              return movie.movieGenre === 'comédia'
            })

            this.lastMoviesAdded = movie.sort(function(a,b){
              return b.id - a.id;
            })
      })
      }, 400);


      let sidenav = document.querySelector('mat-sidenav-content')

      sidenav?.addEventListener('scroll', event => {
      
          if( sidenav?.scrollTop != undefined) {

            if(sidenav?.scrollTop > 0)
            {

              this.navbg = {
                'background-color': 'black',
                'transition-duration': '1s'
              }   

            }
            else
            {

              this.navbg = {
                'background': 'trasnparent',
                'transition-duration': '1s'
              }

            }
          }
      })
  }

  watchMovie(movie: MovieModel): void {
    
    this.router.navigate(['movie',movie.id])
  }
}


