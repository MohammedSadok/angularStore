import { AfterViewChecked, Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements AfterViewChecked{
  constructor(private service: ProductService) {}
  TableData:any = [];

  ngAfterViewChecked(): void {
    this.TableData = this.service.result;
  }


  getAllProduct() {
    if (this.service.result.length == 0) {
      this.service.getAllProduct().subscribe((data: any) => {
        this.service.result = data;
        console.log(this.service.result);
      });
    }
  }



  deleteProduct(id: number) {
    this.service.deleteProduct(id).subscribe((data: any) => {
      console.log(data);
      this.service.result.forEach((element: any, index: number) => {
        if (element.id == data.id) this.service.result.splice(index, 1);
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
