import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, publishLast, refCount} from 'rxjs/operators';
import {Character} from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrlDev = 'https://swapi.dev/api/people';
  private readonly headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Accept', 'application/json');
  }


  getCharacters(searchParam?: string): Observable<Character[]> {
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

  getCharacterById(id: string): Observable<Character> {
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
