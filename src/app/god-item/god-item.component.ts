import { Component, OnInit, Input, Output, EventEmitter, ViewChild  } from '@angular/core';
import { GotDetailComponent } from '../got-detail/got-detail.component';
@Component({
  selector: 'app-god-item',
  templateUrl: './god-item.component.html',
  styleUrls: ['./god-item.component.css']
})
export class GodItemComponent implements OnInit {

  @ViewChild('myGod') gotDetailComponent: GotDetailComponent
  @Input() iGod;  
  @Output() godClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onGodClick(){
    this.godClicked.emit(this.iGod);
  }

  invokeDetail(){
    this.gotDetailComponent.sayHello(this.iGod);
  }

}
