import {HttpClient} from '@angular/common/http';
import {ICRUD} from './ICRUD';
import {Observable} from 'rxjs';

export abstract class CRUD<T, I> implements ICRUD<T, I> {

  protected constructor(
    protected http: HttpClient,
    public url: string
  ) {
  }

  index(changeUrl?: string): Observable<I> {
    if (changeUrl) {
      this.url = changeUrl;
    }
    return this.http.get<I>(`${this.url}`, {});
  }

  show(id: string, changeUrl?: string): Observable<T> {
    if(changeUrl) {
      this.url = changeUrl;
    }
    return this.http.get<T>(`${this.url}/${id}`);
  }
}
