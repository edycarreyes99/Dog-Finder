import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BreedsRoutingModule} from './breeds-routing.module';
import {BreedsViewComponent} from './components/breeds-view/breeds-view.component';
import {FavoriteBreedComponent} from './components/favorite-breed/favorite-breed.component';
import {SubBreedsModule} from "./modules/sub-breeds/sub-breeds.module";
import {BreedsListComponent} from "../common/breeds-common/components/breeds-list/breeds-list.component";
import {BreedItemComponent} from "../common/breeds-common/components/breed-item/breed-item.component";
import {MatCardModule} from "@angular/material/card";
import {BreedsService} from "./services/breeds.service";
import {BreedImagesService} from "../../core/services/breed-images/breed-images.service";
import {MatButtonModule} from "@angular/material/button";
import {BreedsCommonModule} from "../common/breeds-common/breeds-common.module";
import {OverlayModule} from "@angular/cdk/overlay";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzMessageModule} from "ng-zorro-antd/message";


@NgModule({
  declarations: [
    BreedsViewComponent,
    FavoriteBreedComponent
  ],
  imports: [
    CommonModule,
    BreedsRoutingModule,
    BreedsCommonModule,
    MatCardModule,
    MatButtonModule,
    NzImageModule,
    NzMessageModule
  ],
  exports: [],
  providers: [BreedsService, BreedImagesService]
})
export class BreedsModule {
}
