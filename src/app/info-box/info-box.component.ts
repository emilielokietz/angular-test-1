import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
text="Additional Info-Text on our Info Box";
textZwei ="This Text is not hidden. The value for hidden is false";
hidden = true; 

  constructor() { 
    console.log("hello")
  }

  ngOnInit(): void {
    console.log("world")
  }

}
