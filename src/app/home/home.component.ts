import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headername = "Angular Tutorial";
  salary = 1000;
  rate = 0.547;
  isDisable = true;
  constructor() { }

  ngOnInit(): void {
  }
  clickFunction(name: string) {
    alert(name)
  }
  clickFunctionInput(name: string) {
    alert(name)
  }

}
