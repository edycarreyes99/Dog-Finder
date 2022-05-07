import {Injectable} from '@angular/core';
import {CRUD} from "../../../core/models/crud";
import {HttpClient} from "@angular/common/http";
import {BreedResponse} from "../../../core/models/breed-response";
import {ALL_REEDS_URL} from "../../../core/constants/breeds.constants";

@Injectable({
  providedIn: 'root'
})
export class BreedsService extends CRUD<BreedResponse<string[]>, BreedResponse<Record<string, string[]>>> {

  constructor(
    protected override http: HttpClient
  ) {
    super(http, ALL_REEDS_URL);
  }
}
