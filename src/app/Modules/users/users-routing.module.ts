import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from '../admin/edit/edit.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';

const routes: Routes = [
  { path: 'userview', component: MyEventsComponent },
  { path: 'userview/singleview/:id', component: SingleViewComponent },
  { path: 'singleview/edit/:id', component: EditComponent },
  { path: 'userview/booking', component: MyBookingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
