import {Observable} from 'rxjs';

export interface ICRUD<T, I> {
  index(changeUrl?: string): Observable<I>;

  show?(id: string, changeUrl?: string): Observable<T>;

}
