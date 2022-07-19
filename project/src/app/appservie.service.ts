import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/Observable/throw';

@Injectable({
  providedIn: 'root'
})
export class AppservieService {
  urls: any = 'https://jsonplaceholder.typicode.com/posts';
  url: string = "/assets/data/employee.json"
  constructor(private http: HttpClient) { }

  getEmployee(){
    return this.http.get(this.url)
    // .catch(this.errorHandler)
  }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  deleteData(id: any) {
    console.log("hello",id)
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/`+id)

  }

  // errorHandler(error:HttpErrorResponse){
  //   return Observable.throw (error.message || "Server Error");

  // }
}
