import { getLocaleCurrencyCode } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurants } from '../_Models/restaurants.model';

@Injectable({

  providedIn: 'root'

})

export class RestaurantsService {

  private _baseUrl: string = "http://localhost:9091/api/restaurants/fetchAllRestaurants";
  constructor(private http: HttpClient) {
  }

  getRestaurantsList(): Observable<Restaurants[]> {
    return this.http.get<Restaurants[]>(`${this._baseUrl}`);
  }

  addNewRestaurants(restaurantsobj: Restaurants): Observable<any> {
    return this.http.post<any>(`_baseUrl`, restaurantsobj);
  }

  getAll(): Restaurants[] {
    return [
      {
        id: 1,
        name: 'Moon Bean',
        address: 'Bangalore, Brookefield',
        imageUrl: '/assets/restaurant1.png',
      },

      {
        id: 2,
        name: 'Prism',
        address: 'Bangalore, Marthaalli',
        imageUrl: '/assets/restaurant2.png',
      },

      {

        id: 3,
        name: 'insomia',
        address: 'Bangalore, whitefield',
        imageUrl: '/assets/restaurant3.png',
      }
    ];
  }

}