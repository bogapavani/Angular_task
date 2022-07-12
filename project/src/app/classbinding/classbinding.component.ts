import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-classbinding',
  template: `<div >
   <h2 class="text-error"> {{code}}</h2>
   <h2 class="text-success"> {{code}}</h2>
   <h2 [class]="successClass">{{code}}</h2>
   <h2 [class.text-error]="hasError">{{code}}</h2>
   <!-- ngClass -->
   <h2 [ngClass]="message">{{code}}</h2>
   <h2 [style.color]="'green'">{{code}}1</h2>
   <h2 [style.color]="hasError?'red':'green'">{{code}}2</h2>
   <!-- PropertyBinding -->
   <h2 [style.color]="highLighted">{{code}}3</h2>
   <!-- ngClass -->
   <h2 [ngStyle]="titleMessage">{{code}}4</h2>
     </div>`,
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
  public code = "Angular";
  public successClass = "text-success";
  public hasError = true; // public hasError ="false" then it will give color red in [style.color]
  public isSpecial = true;
  public highLighted="orange"
  public message = {
    "text-success": !this.hasError,
    "text-error": this.hasError,
    "text-special": this.isSpecial
  }
  public titleMessage={
    color:"skyblue",
    fontStyle:"italic"

  }
  constructor() { }

  ngOnInit(): void {
  }

}
