import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  
  people = {
            name : "Dom",
            age :30,
            album : "Dominic",
            year :2010,
  };
  constructor() { }

  ngOnInit() {

  }

  sendData(namee, albume, yeare)
  {
    this.people.name = namee;
    this.people.album = albume;
    this.people.year = yeare;
  }

  doSomething(event)
  {
    console.log(event);
  }
}
