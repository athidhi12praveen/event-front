import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css'],
})
export class MyBookingsComponent implements OnInit {
  // get all events property
  allbookings: any = [];
  searchkey: any = {};

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchkey = localStorage.getItem('usermail');

    this.getAllbookings();
  }

  getAllbookings = () => {
    this.api.allbookings().subscribe({
      next: (res: any) => {
        console.log(res);

        this.allbookings = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  };

  // delete bookings
  deletebooking(_id: any) {
    console.log(_id);
    this.api.deletebooking(_id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getAllbookings();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
