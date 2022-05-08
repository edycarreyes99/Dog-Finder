import {HttpClient} from '@angular/common/http';
import {ICRUD} from './ICRUD';
import {Observable} from 'rxjs';
import {ALL_REEDS_URL, BREED_URL} from "../constants/breeds.constants";

export abstract class CRUD<T, I> implements ICRUD<T, I> {

  protected constructor(
    protected http: HttpClient,
    public url: string
  ) {
  }

  index(parentBreed?: string, subBreed?: string): Observable<I> {
    if (parentBreed && subBreed) {
      console.log('Subbreed');
      this.url = BREED_URL + `${parentBreed}/list`;
    } else {
      console.log('Parent breed')
      this.url = ALL_REEDS_URL;
    }
    return this.http.get<I>(`${this.url}`, {});
  }

  show(id: string, changeUrl?: string): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }
}
