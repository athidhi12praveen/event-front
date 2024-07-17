import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private navi: Router
  ) {}

  ngOnInit(): void {}

  logout = () => {
    this.navi.navigateByUrl('');

    localStorage.clear();
    console.clear();
  };
}
