import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogBreedsRoutingModule } from './dog-breeds-routing.module';
import { BreedsListComponent } from './components/breeds-list/breeds-list.component';


@NgModule({
  declarations: [
    BreedsListComponent
  ],
  imports: [
    CommonModule,
    DogBreedsRoutingModule
  ]
})
export class DogBreedsModule { }
