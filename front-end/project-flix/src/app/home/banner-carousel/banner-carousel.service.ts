import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from './banner';

@Injectable({
  providedIn: 'root'
})
export class BannerCarouselService {

  api: string = 'https://localhost:7248/'
  banners: Banner[] = []

  constructor(private http: HttpClient) { }

  getBanners(): Observable<Banner[]> {
    
    return this.http.get<Banner[]>(`${this.api}api/Banner`)
  }
  
}
