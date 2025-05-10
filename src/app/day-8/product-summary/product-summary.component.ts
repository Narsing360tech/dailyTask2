import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RootServiceService } from 'src/app/service/root-service.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent {
  productCategories: any[] = [] //declare variable with array type 
  constructor(private rootService: RootServiceService) {
    this.getProductData(); //get call for the getProduct method for the service call
  }

  getProductData() {
    this.rootService.getAllProducts().subscribe((res: any) => {
      res.forEach((data: IProduct) => {
        this.productCategories.push(data.category); //push each data in the productsCategories
      })
    })
  }

}
