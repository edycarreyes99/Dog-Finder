import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogBreedsRoutingModule } from './dog-breeds-routing.module';
import { BreedsListComponent } from './components/breeds-list/breeds-list.component';
import { BreedItemComponent } from './components/breed-item/breed-item.component';


@NgModule({
  declarations: [
    BreedsListComponent,
    BreedItemComponent
  ],
  imports: [
    CommonModule,
    DogBreedsRoutingModule
  ]
})
export class DogBreedsModule { }
