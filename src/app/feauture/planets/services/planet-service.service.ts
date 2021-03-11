import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, publishLast, refCount} from 'rxjs/operators';
import {Planet} from '../models/planet';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private baseUrlDev = 'https://swapi.dev/api/planets';
  private readonly headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Accept', 'application/json');
  }


  getPlanets(searchParam?: string): Observable<Planet[]> {
    let params = new HttpParams();
    params = params.append('search', String(searchParam));
    // params = params.append('pageNumber', String(pageQuery.pageNumber));

    return this.http.get(this.baseUrlDev + '/', {headers: this.headers, params}).pipe(
      map(res => {
        return res['results'];
      }),
      publishLast(),
      refCount()
    );
  }

  getPlanetById(id: string): Observable<Planet> {
    let params = new HttpParams();
    // params = params.append('pageSize', String(pageQuery.pageSize));
    // params = params.append('pageNumber', String(pageQuery.pageNumber));

    return this.http.get(this.baseUrlDev + '/' + id + '/', {headers: this.headers, params}).pipe(
      map(res => {
        return res;
      }),
      publishLast(),
      refCount()
    );
  }
}
