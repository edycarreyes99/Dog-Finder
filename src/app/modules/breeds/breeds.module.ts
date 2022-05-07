import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsViewComponent } from './components/breeds-view/breeds-view.component';
import { FavoriteBreedComponent } from './components/favorite-breed/favorite-breed.component';
import {SubBreedsModule} from "./modules/sub-breeds/sub-breeds.module";


@NgModule({
  declarations: [
    BreedsViewComponent,
    FavoriteBreedComponent
  ],
  imports: [
    CommonModule,
    BreedsRoutingModule,
    SubBreedsModule
  ]
})
export class BreedsModule { }
