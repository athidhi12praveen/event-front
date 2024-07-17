import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  id: any;
  data: any;
  bookForm: FormGroup;
  userdata: any;
  userEmail: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private fb: FormBuilder,
    private navi: Router
  ) {
    this.bookForm = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      location: ['', [Validators.required]],
      address: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      const { id } = res;
      console.log(id);

      this.api.getSingleEvent(id).subscribe((res) => {
        this.data = res;
      });
    });

    this.userdata = localStorage.getItem('userId');
    this.userEmail = localStorage.getItem('usermail');
  }

  // booking
  book() {
    if (this.bookForm.valid) {
      const usermail = this.userEmail;
      const name = this.bookForm.value.name;
      const event = this.data.title;
      const eventid = this.data.id;
      const eventimg = this.data.image;
      const mobile = this.bookForm.value.mobile;
      const location = this.bookForm.value.location;
      const address = this.bookForm.value.address;
      const date = this.bookForm.value.date;

      console.log(
        `${usermail} ${name} ${event} ${eventimg} ${eventid} ${mobile} ${location} ${address} ${date}`
      );

      const req = {
        usermail,
        name,
        event,
        eventid,
        eventimg,
        mobile,
        location,
        address,
        date,
      };

      // api call for book a event
      this.api.bookEvent(req).subscribe({
        next: (res: any) => {
          this.navi.navigateByUrl(`/users/${this.userdata}/userview/booking`);
          console.log(res);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    } else {
      alert('Invalid form');
    }
  }
}
