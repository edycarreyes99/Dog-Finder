import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubBreedsRoutingModule } from './sub-breeds-routing.module';
import { BreedsListComponent } from '../../components/breeds-list/breeds-list.component';
import { BreedItemComponent } from '../../components/breed-item/breed-item.component';


@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    SubBreedsRoutingModule
  ]
})
export class SubBreedsModule { }
