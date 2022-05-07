import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsRoutingModule } from './dogs-routing.module';
import { DogsViewComponent } from './components/dogs-view/dogs-view.component';
import { FavoriteBreedComponent } from './components/favorite-breed/favorite-breed.component';


@NgModule({
  declarations: [
    DogsViewComponent,
    FavoriteBreedComponent
  ],
  imports: [
    CommonModule,
    DogsRoutingModule
  ]
})
export class DogsModule { }
