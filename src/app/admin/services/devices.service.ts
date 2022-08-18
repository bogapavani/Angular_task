
import { Injectable } from '@angular/core';
import { Devices } from './devices.model'

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor() { }


  deviceData: Devices[] = [{
    id: 1,
    name: "Mac",
    assignedTo: "Pavani",
    deviceType: "Mac",
    os: "Apple macOS",
    serviceTag: "ABCD123",
  },
  {
    id: 2,
    name: "Windows",
    assignedTo: "Pavani",
    deviceType: "Windows",
    os: "Microsoft Windows",
    serviceTag: "EFGH123",
  },
  {
    id: 3,
    name: "Android",
    assignedTo: "Pavani",
    deviceType: "Android",
    os: "Google's Android OS",
    serviceTag: "IJKL123",
  }];

  create(devicecontact: Devices) {
    const itemIndex = this.deviceData.length;
    devicecontact.id = this.getnextId();
    console.log("hello", devicecontact);
    this.deviceData[itemIndex] = devicecontact;
  }

  delete(devicecontact: Devices) {
    this.deviceData.splice(this.deviceData.indexOf(devicecontact), 1);
  }

  update(devicecontact: Devices) {
    const itemIndex = this.deviceData.findIndex(item => item.id === devicecontact.id);
    console.log(itemIndex);
    this.deviceData[itemIndex] = devicecontact;
  }

  getall(): Devices[] {
    console.log('deviceDataervice:getall');
    console.log(this.deviceData);
    return this.deviceData;
  }



  getnextId(): number {
    let highest = 0;
    this.deviceData.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}


