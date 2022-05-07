import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BreedsRoutingModule} from './breeds-routing.module';
import {BreedsViewComponent} from './components/breeds-view/breeds-view.component';
import {FavoriteBreedComponent} from './components/favorite-breed/favorite-breed.component';
import {SubBreedsModule} from "./modules/sub-breeds/sub-breeds.module";
import {BreedsListComponent} from "./components/breeds-list/breeds-list.component";
import {BreedItemComponent} from "./components/breed-item/breed-item.component";
import {MatCardModule} from "@angular/material/card";
import {BreedsService} from "./services/breeds.service";
import {BreedImagesService} from "../../core/services/breed-images/breed-images.service";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    BreedsViewComponent,
    FavoriteBreedComponent,
    BreedsListComponent,
    BreedItemComponent
  ],
  imports: [
    CommonModule,
    BreedsRoutingModule,
    SubBreedsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [BreedsService, BreedImagesService]
})
export class BreedsModule {
}
