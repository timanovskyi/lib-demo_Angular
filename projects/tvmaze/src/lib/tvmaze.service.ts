import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from './tvmaze.models';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  private readonly _apiRoot = 'https://api.tvmaze.com'
  constructor(private _http: HttpClient) {
  }

  getShow(id: number): Observable<Show> {
    const url = `${this._apiRoot}/shows/${id}`;
    return this._http.get<Show>(url);
  }
}
