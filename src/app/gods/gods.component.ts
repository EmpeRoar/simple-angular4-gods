import { Component, OnInit } from '@angular/core';
import { God } from './gods.model';
@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html',
  styleUrls: ['./gods.component.css']
})
export class GodsComponent implements OnInit {

  selectedGod: God;

  gods: God[] = [
      new God('Jupiter','Thunder'),
      new God('Mars','War'),
      new God('Earth','Plants')
  ];

  constructor() { }

  ngOnInit() {
  }

  handleGodClicked(god){
      this.selectedGod = god;
  }

}
