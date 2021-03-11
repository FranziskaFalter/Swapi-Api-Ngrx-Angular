import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, publishLast, refCount} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoadSwapiDataService {
  private baseUrlDev = 'https://swapi.dev/api';
  private readonly headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Accept', 'application/json');
  }


  getSpeciesById(id: string): Observable<any> {
    let params = new HttpParams();
    return this.http.get(this.baseUrlDev + '/species/' + id + '/', {headers: this.headers, params}).pipe(
      map(res => {
        return res;
      }),
      publishLast(),
      refCount()
    );
  }

  getSpaceShipsById(id: string): Observable<any> {
    let params = new HttpParams();
    return this.http.get(this.baseUrlDev + '/starships/' + id + '/', {headers: this.headers, params}).pipe(
      map(res => {
        return res;
      }),
      publishLast(),
      refCount()
    );
  }

  getVehiclesById(id: string): Observable<any> {
    let params = new HttpParams();
    return this.http.get(this.baseUrlDev + '/vehicles/' + id + '/', {headers: this.headers, params}).pipe(
      map(res => {
        return res;
      }),
      publishLast(),
      refCount()
    );
  }
}
