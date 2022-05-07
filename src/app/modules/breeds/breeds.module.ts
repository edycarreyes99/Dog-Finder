import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsViewComponent } from './components/breeds-view/breeds-view.component';
import { FavoriteBreedComponent } from './components/favorite-breed/favorite-breed.component';
import {SubBreedsModule} from "./modules/sub-breeds/sub-breeds.module";
import {BreedsListComponent} from "./components/breeds-list/breeds-list.component";
import {BreedItemComponent} from "./components/breed-item/breed-item.component";


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
    SubBreedsModule
  ]
})
export class BreedsModule { }
