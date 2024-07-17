import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  // get all events property
  allevents: any = [];
  searchKey: string = '';

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private navi: Router
  ) {}

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

  // delete contact
  deleteEvent(_id: any) {
    this.api.deleteEvent(_id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getAllevents();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  logout = () => {
    this.navi.navigateByUrl('');

    localStorage.clear();
    console.clear();
  };
}
