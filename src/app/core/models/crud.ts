import {HttpClient} from '@angular/common/http';
import {ICRUD} from './ICRUD';
import {Observable} from 'rxjs';

export abstract class CRUD<T, I> implements ICRUD<T, I> {

  protected constructor(
    protected http: HttpClient,
    public url: string
  ) {
  }

  index(): Observable<I> {
    return this.http.get<I>(`${this.url}`, {});
  }

  show(id: string): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }
}
