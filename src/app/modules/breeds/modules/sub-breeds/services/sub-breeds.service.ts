import {Injectable} from '@angular/core';
import {CRUD} from "../../../../../core/models/crud";
import {BreedResponse} from "../../../../../core/models/breed-response";
import {HttpClient} from "@angular/common/http";
import {BREED_RANDOM_IMAGE_URL} from "../../../../../core/constants/breeds.constants";

@Injectable({
  providedIn: 'root'
})
export class SubBreedsService extends CRUD<BreedResponse<string>, BreedResponse<string[]>> {

  constructor(
    protected override http: HttpClient,
  ) {
    super(http, BREED_RANDOM_IMAGE_URL);
  }
}
