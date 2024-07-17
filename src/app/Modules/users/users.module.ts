import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelComponent } from './model/model.component';
import { SearchPipe } from './tranform/search.pipe';
import { FindbookingsPipe } from './tranform/findbookings.pipe';
import { MyEventsComponent } from './my-events/my-events.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    UsersComponent,
    ModelComponent,
    SearchPipe,
    FindbookingsPipe,
    MyEventsComponent,
    SingleViewComponent,
    MyBookingsComponent,
    NavbarComponent,
    NavComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule, FormsModule],
})
export class UsersModule {}
