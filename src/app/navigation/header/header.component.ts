import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 @Output() sidenav=new EventEmitter();
  ngOnInit() {
  }
showsidebar(){
  this.sidenav.emit();
}
}
