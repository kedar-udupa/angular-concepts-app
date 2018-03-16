import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  personName : string = "";
  imgSource : string = "../assets/logo2.png"
  constructor() { }

  ngOnInit() {
  }

}
