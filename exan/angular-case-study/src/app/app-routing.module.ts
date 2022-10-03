import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './component/layout/home/home.component';
import {RoomsComponent} from './component/facility/rooms/rooms.component';
import {AddCustomerComponent} from './component/customer/add-customer/add-customer.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'customer/add', component: AddCustomerComponent},
  {path: 'customer', component: CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
