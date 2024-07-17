import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  addForm = this.fb.group({
    id: ['', [Validators.required]],
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    image: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: Router
  ) {}

  add() {
    if (this.addForm.valid) {
      const id = this.addForm.value.id;
      const title = this.addForm.value.title;
      const description = this.addForm.value.description;
      const price = this.addForm.value.price;
      const image = this.addForm.value.image;

      // alert(`${id} ${title} ${url} ${description} ${price} ${image}`)
      console.log(`${id} ${title} ${description} ${price} ${image}`);

      const reqBody = { id, title, description, price, image };

      // api call for users
      this.api.addEvent(reqBody).subscribe({
        next: (res: any) => {
          console.log(res);
          this.route.navigateByUrl('admin/view');
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    } else {
      alert('Invalid form');
    }
  }

  // cancel button
}
