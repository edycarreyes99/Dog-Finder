import {Observable} from 'rxjs';

export interface ICRUD<T, I> {
  index(subBreed?: string): Observable<I>;

  show?(id: string, changeUrl?: string): Observable<T>;

}
