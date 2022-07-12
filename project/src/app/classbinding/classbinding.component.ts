import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-classbinding',
  template: `<div >

   <h2 class="text-error"> {{code}}</h2>
   <h2 class="text-success"> {{code}}</h2>
   <h2 [class]="successClass">{{code}}</h2>
   <h2 [class.text-error]="hasError">{{code}}</h2>
   <!-- <button (click)="onClick()">Submit</button> -->
   <!-- ngClass -->
   <h2 [ngClass]="message">{{code}}</h2>
   <h2 [style.color]="'green'">{{code}}1</h2>
   <h2 [style.color]="hasError?'red':'green'">{{code}}2</h2>
   <!-- PropertyBinding -->
   <h2 [style.color]="highLighted">{{code}}3</h2>
   <!-- ngClass -->
   <h2 [ngStyle]="titleMessage">{{code}}4</h2>
   <button (click)="click()">Submit</button>
   <button (click)="onClick($event)">Submit</button><br/><br/>
   <input #myInput type="text"><br/><br/>
   <button (click)="onLog(myInput.value)">Log</button><br/><br/>
   <button (click)="Welcome='hello click button'">Submit</button>   {{Welcome}}<br/><br/>
   <input type="text" [(ngModel)]="userName"><br/><br/>
   <button (click)="messages()">Log</button>
   {{userName}}
     </div>
     <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red</div>
      <div *ngSwitchCase="'green'">You picked green</div>
      <div *ngSwitchDefault>You have to pick again</div>
      <h2 *ngIf="false">hello</h2>
      <h2 *ngIf="true">hello</h2>
      <h2 *ngIf="available">Hello00</h2>
      <div *ngFor="let arrays of array ; index as i">{{i}}{{arrays}}</div>
     </div>
    `,
  styles: [`
  .text-error{
color:red
  }
 .text-success {
    color:green
  }
  .text-special{
    font-style:italic;
  }`]
})
export class ClassbindingComponent implements OnInit {
  public available=true;
  public code = "Angular";
  public Welcome = "";
  public successClass = "text-success";
  public hasError = true; // public hasError ="false" then it will give color red in [style.color]
  public isSpecial = true;
  public highLighted = "orange";
  public userName = "";
  public message = {
    "text-success": !this.hasError,
    "text-error": this.hasError,
    "text-special": this.isSpecial
  }
  public titleMessage = {
    color: "skyblue",
    fontStyle: "italic"

  }
  public color = "pink"
  public array=["fruits","flowers","trees","plants"]
  constructor() { }

  ngOnInit(): void {
  }
  click() {
    console.log("Welcome to Code");
    this.Welcome = "Click function"
  }
  onClick(event: any) {
    console.log(event);
    this.Welcome = event.type
  }
  onLog(value: any) {
    console.log(value);

  }

  messages() {
    console.log(this.userName)
  }

}
