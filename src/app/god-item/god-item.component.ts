import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-god-item',
  templateUrl: './god-item.component.html',
  styleUrls: ['./god-item.component.css']
})
export class GodItemComponent implements OnInit {


  @Input() iGod;  
  @Output() godClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onGodClick(){
    this.godClicked.emit(this.iGod);
  }

}
