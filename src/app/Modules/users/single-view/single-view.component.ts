import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css'],
})
export class SingleViewComponent implements OnInit {
  event: any = {};
  allusers: any = [];

  constructor(
    private api: ApiService,
    private activated: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.activated.params.subscribe((data: any) => {
      console.log(data);
      const { id } = data;
      console.log(id);

      this.getEvent(id);
    });
  }

  // api call to get a event
  getEvent = (id: any) => {
    this.api.getSingleEvent(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.event = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  };
}
