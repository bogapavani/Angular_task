import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {
 
  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.get(environment.base_url + '/employees');
  }

  addEmployee(items: any) {
    return this.http.post(environment.base_url + '/employees', items);
  }


  getDevices() {
    return this.http.get(environment.base_url + '/devices');

  }

  addDevices(elements: any) {
    return this.http.post(environment.base_url + '/devices', elements)
  }


  updateDevices(id: any, data: any) {

    // console.log("data", data);

    // console.log("id", id);
    debugger
    let url = environment.base_url + '/devices/' + id;
    // console.log("url", url);


    return this.http.put(url,data)
    .subscribe((item:any)=>{
      console.log("data1",data);
       console.log("url", url);
      
      console.log("item",item);
      // console.log("pavani",item);
      
    })

  }



  updateEmployees(json: any) {
    console.log("json", json);

    let url = environment.base_url + '/employees/' + json.id;
    console.log(url);

    return this.http.put(url, json);

    
  }

  get(id: any) {
    return this.http.get(environment.base_url + '/employees' + '/' + id);
  }


}
