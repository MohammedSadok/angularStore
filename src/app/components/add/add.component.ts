import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  registerForm = this.fb.group({
    title: ['', Validators.required],
    price: [1,[Validators.required, Validators.pattern('^[0-9]*$')]],
    description: ['', Validators.required],
    category: ['', Validators.required],
    image: ['', Validators.required],
  });
  isSubmitted = false;
  categories = [
    { id: 1, title: 'electronics' },
    { id: 2, title: 'jewelery' },
    { id: 3, title: "men's clothing" },
    { id: 4, title: "women's clothing" },
  ];

  constructor(private fb: FormBuilder, private service: ProductService) {}

  onSubmit(): void {
    let product:Product ={
      id: self.crypto.randomUUID(),
      title: this.registerForm.value.title+"",
      category: this.registerForm.value.category+"",
      description: this.registerForm.value.description+"",
      price: Number(this.registerForm.value.price),
      image: this.registerForm.value.image+"",
      rating:{
        count: Math.random(),
        rate: Math.random(),

      }
    }
    this.service.addProduct(product).subscribe(response => {
      this.service.result.push(response);
      this.registerForm.reset();
    });
  }
}
