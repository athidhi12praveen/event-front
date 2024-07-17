import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // get all events property
  allbookings: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
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
}
