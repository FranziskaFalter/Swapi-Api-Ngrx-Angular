import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, publishLast, refCount} from 'rxjs/operators';
import {Film} from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private baseUrlDev = 'https://swapi.dev/api/films';
  private readonly headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Accept', 'application/json');
  }


  getFilms(searchParam?: string): Observable<Film[]> {

    let params = new HttpParams();
    params = params.append('search', String(searchParam));

    return this.http.get(this.baseUrlDev + '/', {headers: this.headers, params}).pipe(
      map(res => {
        return res['results'];
      }),
      publishLast(),
      refCount()
    );
  }

  getFilmById(id: string): Observable<Film> {
    let params = new HttpParams();
    return this.http.get(this.baseUrlDev + '/' + id + '/', {headers: this.headers, params}).pipe(
      map(res => {
        return res;
      }),
      publishLast(),
      refCount()
    );
  }
}
