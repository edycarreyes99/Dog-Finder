import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreedsListComponent} from "./components/breeds-list/breeds-list.component";
import {BreedItemComponent} from "./components/breed-item/breed-item.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {BreedsService} from "../../breeds/services/breeds.service";
import {SubBreedsService} from "../../breeds/modules/sub-breeds/services/sub-breeds.service";
import {BreedImagesService} from "../../../core/services/breed-images/breed-images.service";
import {OverlayModule} from "@angular/cdk/overlay";
import {MatTooltipModule} from "@angular/material/tooltip";
import {NzImageModule} from "ng-zorro-antd/image";



@NgModule({
  declarations: [
    BreedsListComponent,
    BreedItemComponent
  ],
  exports: [
    BreedsListComponent,
    BreedItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    NzImageModule
  ],
  providers: []
})
export class BreedsCommonModule { }
