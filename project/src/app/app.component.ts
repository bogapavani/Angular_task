import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .text-error{
color:red
  }
 .text-success {
  background-color:green
  }
  .text-special{
    font-style:italic;
  }`]
})
export class AppComponent implements OnInit {
  title = 'project';
  public successClass = {
    color: "skyblue",
    fontStyle: "italic",
  };
  public name = "Angular Developer";
  public button1 = "bg-primary";
  public button2 = "bg-secondary";
  public color={
    color1:"bg-primary",
    color2:"bg-secondary"
  }
  public message: any;
  constructor() { }


  ngOnInit(): void {
    // console.log(this.message)
  }
  display(event: String) {
    console.log(event)
    this.message = event;
  }
}
