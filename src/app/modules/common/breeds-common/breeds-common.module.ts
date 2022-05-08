import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {BreedImagesModalComponent} from './components/breed-images-modal/breed-images-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzIconModule} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [
    BreedsListComponent,
    BreedItemComponent,
    BreedImagesModalComponent
  ],
  exports: [
    BreedsListComponent,
    BreedItemComponent,
    BreedImagesModalComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    NzImageModule,
    MatDialogModule,
    NzSpinModule,
    NzIconModule
  ],
  providers: [
    BreedImagesModalComponent,
    BreedImagesService
  ],
  entryComponents: [
    BreedImagesModalComponent
  ]
})
export class BreedsCommonModule {
}
