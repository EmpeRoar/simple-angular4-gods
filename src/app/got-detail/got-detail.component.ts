import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-got-detail',
  templateUrl: './got-detail.component.html',
  styleUrls: ['./got-detail.component.css']
})
export class GotDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sayHello(god){
    alert(god.name);
  }

}
