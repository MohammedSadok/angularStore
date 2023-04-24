import { AfterViewChecked, Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements AfterViewChecked {
  constructor(private service: ProductService, private router: Router) {}
  TableData: Product[] = [];
  starWidth: number = 0;

  rateProduct(rateValue: number) {
    this.starWidth = (rateValue * 75) / 5;
  }
  ngAfterViewChecked(): void {
    this.TableData = this.service.result;
  }

  getAllProduct() {
    if (this.service.result.length == 0) {
      this.service.getAllProduct().subscribe((data: Product[]) => {
        this.service.result = data;
        console.log(this.service.result);
      });
    }
  }

  deleteProduct(id: number) {
    this.service.deleteProduct(id).subscribe((data: Product) => {
      this.service.result.forEach((element: Product, index: number) => {
        if (element.id === id) this.service.result.splice(index, 1);
      });
    });
  }
  updateProduct(id: number) {
    this.router.navigate(['/main/product/add', { id: id }]);
  }

  ngOnInit() {
    if (this.service.result.length == 0) {
      this.service.getAllProduct().subscribe((data: any) => {
        this.service.result = data;
        console.log(this.service.result);
      });
    }
  }
}
