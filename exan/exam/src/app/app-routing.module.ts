import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarListComponent} from './component/car-list/car-list.component';
import {CarUpdateComponent} from './component/car-update/car-update.component';


const routes: Routes = [
  {
    path: '', component: CarListComponent
  },
  {
    path: 'car/edit/:id', component: CarUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
