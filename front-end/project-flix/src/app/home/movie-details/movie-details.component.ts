import { MovieModel } from './../models/movie.model';
import { Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent  {

    constructor(
        @Inject(MAT_DIALOG_DATA) public movie:MovieModel,
        private route:Router,
        public dialogRef: MatDialogRef<MovieDetailsComponent>
        ) { }

    watchMovie(): void{
        this.route.navigate(['/movie',this.movie.id])
        this.dialogRef.close();
    }

    backMovies(): void {
        this.dialogRef.close()
    }
}