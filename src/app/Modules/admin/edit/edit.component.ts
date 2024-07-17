import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id: any;
  data: any;
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.id = res.id;
      this.api.getSingleEvent(this.id).subscribe((res) => {
        this.data = res;
        this.editForm.patchValue({
          id: this.data.id,
          title: this.data.title,
          description: this.data.description,
          price: this.data.price,
          image: this.data.image,
        });
      });
    });
  }

  // existing event
  async Submit(_id: any) {
    const data = this.editForm.value;
    const id = this.data._id;

    this.api.editEvent(id, data).subscribe({
      next: (res: any) => {
        console.log(res);
        console.log('Success');
        this.router.navigateByUrl('/admin/view');
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
