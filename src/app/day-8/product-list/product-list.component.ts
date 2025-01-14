import { Component } from '@angular/core';
import { RootServiceService } from 'src/app/service/root-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  productsName: any[] = [];  //here is i am declare the variable as array type
  constructor(private rootService: RootServiceService) {
    this.getAllProducts(); //here calling the method to get data from the service 
  }

  getAllProducts() {
    this.rootService.getAllProducts().subscribe((res) => {
      res.forEach((element: any) => {
        const pName = element.title;
        this.productsName.push(pName); // I am adding the data in the productsName array
      });
    })
  }
}
