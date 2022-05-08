import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BreedsViewComponent} from "./components/breeds-view/breeds-view.component";
import {SubBreedsViewComponent} from "./modules/sub-breeds/components/sub-breeds-view/sub-breeds-view.component";

const routes: Routes = [
  {
    path: '',
    component: BreedsViewComponent
  },
  {
    path: ':breed',
    component: SubBreedsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedsRoutingModule {
}
