import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  product!: Product;
  registerForm = this.fb.group({
    title: ['', Validators.required],
    price: [, [Validators.required, Validators.pattern('/^[+-]?\d*\.?\d+$/')]],
    description: ['', Validators.required],
    category: ['', Validators.required],
    image: ['', Validators.required],
  });
  isSubmitted = false;
  categories: string[] = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.service
      .getOneProduct(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe((data) => {
        console.log(data);
        this.product = data;
      });
  }

  onSubmit(): void {
    const id =
      this.service.result.length > 0
        ? this.service.result[this.service.result.length - 1].id + 1
        : 1;
    let product: Product = {
      id: id,
      title: this.registerForm.value.title + '',
      category: this.registerForm.value.category + '',
      description: this.registerForm.value.description + '',
      price: Number(this.registerForm.value.price),
      image: this.registerForm.value.image + '',
      rating: {
        count: Math.floor((Math.random() + 1) * Math.floor(Math.random() * 10)),
        rate: Math.floor(Math.random() * 5) + 1,
      },
    };
    if (this.route.snapshot.paramMap.has('id')) {
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      product.id = id;
      this.service.updateProduct(product).subscribe((response) => {
        const objToUpdate: Product | undefined = this.service.result.find(
          (obj) => obj.id === id
        );
        if (objToUpdate) {
          objToUpdate.title = response.title;
          objToUpdate.category = response.category;
          objToUpdate.description = response.description;
          objToUpdate.price = response.price;
          objToUpdate.rating = response.rating;
          objToUpdate.image = response.image;

        }
        this.registerForm.reset();
        this.router.navigate(['/main/product/list']);
      });
    } else {
      this.service.addProduct(product).subscribe((response) => {
        this.service.result.push(response);
        this.registerForm.reset();
        this.router.navigate(['/main/product/list']);
      });
    }
  }
}
