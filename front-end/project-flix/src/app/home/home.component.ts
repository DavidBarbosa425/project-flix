import { BannerCarouselService } from './banner-carousel/banner-carousel.service';
import { Banner } from './banner-carousel/banner';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: BannerCarouselService) {}

  moviesAction = [
    {poster: "https://br.web.img2.acsta.net/medias/nmedia/18/89/43/82/20052140.jpg",
    genre: 'ação'},
    {poster: "https://br.web.img2.acsta.net/r_1280_720/pictures/21/09/07/23/03/4521710.jpg",
    genre: 'ação'},
    {poster: "https://br.web.img3.acsta.net/medias/nmedia/18/90/57/96/20121842.jpg",
    genre: 'a'},
    {poster: "https://br.web.img3.acsta.net/pictures/17/11/22/22/35/2368944.jpg",
    genre: 'ação'},
    {poster: "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/87/06/43/19887187.jpg",
    genre: 'ação'},
    {poster: "https://br.web.img2.acsta.net/medias/nmedia/18/92/91/03/20224680.jpg",
    genre: 'ação'},
    {poster: "https://br.web.img3.acsta.net/pictures/bzp/01/29007.jpg",
    genre: 'ação'},
    {poster: "https://br.web.img2.acsta.net/medias/nmedia/18/89/43/82/20052140.jpg",
    genre: 'ação'},
    {poster: "https://br.web.img2.acsta.net/r_1280_720/pictures/21/09/07/23/03/4521710.jpg",
    genre: 'ação'},
    {poster: "https://br.web.img3.acsta.net/medias/nmedia/18/90/57/96/20121842.jpg",
    genre: 'a'},
    {poster: "https://br.web.img3.acsta.net/pictures/17/11/22/22/35/2368944.jpg",
    genre: 'ação'},
    {poster: "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/87/06/43/19887187.jpg",
    genre: 'ação'},
    {poster: "https://br.web.img2.acsta.net/medias/nmedia/18/92/91/03/20224680.jpg",
    genre: 'ação'},
    {poster: "https://br.web.img3.acsta.net/pictures/bzp/01/29007.jpg",
    genre: 'ação'},
 
  ]

  moviesComedy = [
    {poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/84/Ace_ventura_pet_detective.jpg/230px-Ace_ventura_pet_detective.jpg",
    genre: 'comédia'},
    {poster: "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/87/11/41/19872151.jpg",
    genre: 'comédia'},
    {poster: "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/87/23/64/19873407.jpg",
    genre: 'comédia'},
    {poster: "https://br.web.img3.acsta.net/r_1280_720/pictures/21/11/16/17/48/5468162.jpg",
    genre: 'comédia'},
    {poster: "https://br.web.img3.acsta.net/pictures/210/061/21006150_20130515172540045.jpg",
    genre: 'comédia'},
    {poster: "https://br.web.img2.acsta.net/medias/nmedia/18/96/10/92/20446410.jpg",
    genre: 'comédia'},
    {poster: "https://br.web.img3.acsta.net/pictures/210/332/21033244_2013083017165566.jpg",
    genre: 'comédia'},
    {poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/84/Ace_ventura_pet_detective.jpg/230px-Ace_ventura_pet_detective.jpg",
    genre: 'comédia'},
    {poster: "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/87/11/41/19872151.jpg",
    genre: 'comédia'},
    {poster: "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/87/23/64/19873407.jpg",
    genre: 'comédia'},
    {poster: "https://br.web.img3.acsta.net/r_1280_720/pictures/21/11/16/17/48/5468162.jpg",
    genre: 'comédia'},
    {poster: "https://br.web.img3.acsta.net/pictures/210/061/21006150_20130515172540045.jpg",
    genre: 'comédia'},
    {poster: "https://br.web.img2.acsta.net/medias/nmedia/18/96/10/92/20446410.jpg",
    genre: 'comédia'},
    {poster: "https://br.web.img3.acsta.net/pictures/210/332/21033244_2013083017165566.jpg",
    genre: 'comédia'},
  ]

  banners: Banner[] = []

  ngOnInit(): void {
    
    this.service.getBanners()
    .subscribe(banners => {
      this.banners = banners
    })
  }
}

