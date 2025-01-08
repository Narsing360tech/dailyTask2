import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  constructor(private http: HttpClient) {
  }

  getAllUser() {
    console.log("users data");
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }
}
