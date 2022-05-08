import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SubBreedsRoutingModule} from './sub-breeds-routing.module';
import {BreedsListComponent} from '../../../common/breeds-common/components/breeds-list/breeds-list.component';
import {BreedItemComponent} from '../../../common/breeds-common/components/breed-item/breed-item.component';
import {SubBreedsViewComponent} from './components/sub-breeds-view/sub-breeds-view.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDividerModule} from "@angular/material/divider";
import {BreedsModule} from "../../breeds.module";
import {BreedsCommonModule} from "../../../common/breeds-common/breeds-common.module";
import {OverlayModule} from "@angular/cdk/overlay";
import {NzImageModule} from "ng-zorro-antd/image";


@NgModule({
  declarations: [
    SubBreedsViewComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    SubBreedsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    BreedsCommonModule,
    NzImageModule
  ]
})
export class SubBreedsModule {
}
