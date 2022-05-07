import {Injectable} from '@angular/core';
import {CRUD} from "../../models/crud";
import {BreedResponse} from "../../models/breed-response";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BreedImagesService {
  // Service Variables
  url = environment.breedsAPIUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  getSingleImage(breed: string, subBreed?: string): Observable<BreedResponse<string>> {
    this.url = environment.breedsAPIUrl;
    if (subBreed) {
      this.url = this.url + 'breed/' + breed + `/${subBreed}/` + 'images/random';
    } else {
      this.url = this.url + 'breed/' + breed + '/images/random';
    }

    return this.http.get<BreedResponse<string>>(this.url);
  }

  getManyImages(breed: string, subBreed?: string, imagesQty: number = 3): Observable<BreedResponse<string[]>> {
    this.url = environment.breedsAPIUrl;
    if (subBreed) {
      this.url = this.url + 'breed/' + breed + `/${subBreed}/` + 'images/random/' + imagesQty;
    } else {
      this.url = this.url + 'breed/' + breed + '/images/random/' + imagesQty;
    }
    return this.http.get<BreedResponse<string[]>>(this.url + 'breed/' + breed + '/images/' + imagesQty);
  }
}
