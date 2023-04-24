import { AfterViewChecked, Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements AfterViewChecked{
  constructor(private service: ProductService) {}
  TableData:Product[] = [];

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



  deleteProduct(id: string) {
    this.service.deleteProduct(id).subscribe((data: Product) => {
      this.service.result.forEach((element: Product, index: number) => {
        if (element.id === id)
          this.service.result.splice(index, 1);
      });
    });
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
