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
  url: string = "/assets/data/employee.json"
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url)
    // .catch(this.errorHandler)
  }
  // errorHandler(error:HttpErrorResponse){
  //   return Observable.throw (error.message || "Server Error");
    
  // }
}
