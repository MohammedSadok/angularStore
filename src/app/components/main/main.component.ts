import { Component } from '@angular/core';
import { GetAllDataService } from 'src/app/services/get-all-data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  result: any = [];
  number: number = 1;
  constructor(private service: GetAllDataService) {}

  getAllData() {
    this.service.getMyData().subscribe((data: any) => {
      this.result = data.results;
      console.log(this.result);
    });
  }
  clean() {
    this.result = [];
  }
  addOne(number: number) {
    this.service.getOneData(number).subscribe((data: any) => {
      this.result.push(data);
    });
    this.number++;
  }
  ngOnInit() {}
}
