import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css'],
})
export class MyEventsComponent implements OnInit {
  allevents: any = [];

  searchKey: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllevents();
  }

  getAllevents = () => {
    this.api.getAllEvent().subscribe({
      next: (res: any) => {
        console.log(res);

        this.allevents = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  };
}
