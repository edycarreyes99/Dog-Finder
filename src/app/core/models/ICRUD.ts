import {Observable} from 'rxjs';

export interface ICRUD<T, I> {
  index(): Observable<I>;

  show?(id: string): Observable<T>;

}
