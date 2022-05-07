import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BreedsViewComponent} from "./components/breeds-view/breeds-view.component";

const routes: Routes = [
  {
    path: '',
    component: BreedsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedsRoutingModule {
}
