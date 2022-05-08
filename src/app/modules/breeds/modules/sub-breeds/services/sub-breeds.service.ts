import {Injectable} from '@angular/core';
import {CRUD} from "../../../../../core/models/crud";
import {BreedResponse} from "../../../../../core/models/breed-response";
import {HttpClient} from "@angular/common/http";
import {BREED_URL} from "../../../../../core/constants/breeds.constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubBreedsService extends CRUD<BreedResponse<string>, BreedResponse<string[]>> {

  constructor(
    protected override http: HttpClient,
  ) {
    super(http, BREED_URL);
  }

  showBreed(breed: string): Observable<BreedResponse<string[]>> {
    return this.http.get<BreedResponse<string[]>>(BREED_URL + `${breed}/list`)
  }

}
