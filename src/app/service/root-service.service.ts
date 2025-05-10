import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { IProduct } from '../day-8/product.model';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {
  private product$!: Observable<any>;
  constructor(private http: HttpClient) {
  }

  getAllUser() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }

  getAllProducts(): Observable<IProduct[]> {

    const url = 'https://fakestoreapi.com/products';
    if (!this.product$) {
      this.product$ = this.http.get<IProduct>(url).pipe(
        shareReplay(1)
      )
    }
    return this.product$;

  }
}
