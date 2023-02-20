import { MovieModel } from './../models/movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MovieService {

    api: string = 'https://localhost:7248/'

    movie: MovieModel[] = []

    constructor(private http: HttpClient) { }

    getMovie(): Observable<MovieModel[]> {
    
        return this.http.get<MovieModel[]>(`${this.api}api/Movie`)
      }

}