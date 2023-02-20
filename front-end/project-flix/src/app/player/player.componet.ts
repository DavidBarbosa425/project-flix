import { MovieService } from './../home/services/movie.service';
import { MovieModel } from './../home/models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {

    movie: MovieModel[] = []

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private movieService: MovieService,
        ){}

    ngOnInit(): void {

         const id = this.route.snapshot.params['id']

         this.movieService.getMovie()
         .subscribe(movie => {
            this.movie = movie.filter(function(movie){
                return movie.id == id
            })
         })
         
    }

    backHome(): void {
        this.router.navigate([""])
    }

}