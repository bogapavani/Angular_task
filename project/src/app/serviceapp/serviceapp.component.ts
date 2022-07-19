import { Component, OnInit } from '@angular/core';
import { AppservieService } from '../appservie.service';

@Component({
  selector: 'app-serviceapp',
  templateUrl: './serviceapp.component.html',
  styleUrls: ['./serviceapp.component.scss']
})
export class ServiceappComponent implements OnInit {
  getJson: any;
  delRecord: any;
  constructor(private appservices: AppservieService) { }

  ngOnInit(): void {
    this.getJsonData();
  }


  getJsonData() {
    this.appservices.getData().subscribe((data: any) => {
      console.log(data)
      this.getJson = data;
    })

  }

  delete(valuesId: any): void {
    console.log(valuesId);
    // debugger
    this.appservices.deleteData(valuesId.id).subscribe(
      (successRes) => {
        console.log(successRes)
      })
  }

}
