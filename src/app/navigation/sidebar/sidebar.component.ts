import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  selected_algo=null;
    options =[
      {number:1,alg:'Bubble'},
      {number:2,alg:'Bucket'},
      // {number:3,alg:'Bucket-Radix'},
      {number:4,alg:'Counting'},
      {number:5,alg:'Heap'},
      {number:6,alg:'Insertion'},
      {number:7,alg:'Merge'},
      // {number:8,alg:'Quick'},
      {number:9,alg:'Radix'},
      {number:10,alg:'Selection'},
      // {number:11,alg:'Shell'}
    ]; 
  constructor(private appService:AppService, private route:Router){}
  ngOnInit(){}
  onGenerate(){
    // console.log(this.selected_algo);
    this.appService.onClear();
    switch (this.selected_algo){
      case 1:{this.route.navigate(['/bubble']);this.appService.onBubble();break;}
      case 2:{this.route.navigate(['/bucket']);this.appService.onBucket();break;}
      case 4:{this.route.navigate(['/counting']) ;this.appService.onCounting();break;}
      case 5:{this.route.navigate(['/heap']); this.appService.onHeap();break;}
      case 6:{this.route.navigate(['/insertion']); this.appService.onInsertion(); break;}
      case 7:{ this.route.navigate(['/merge']);this.appService.onMerge();break;}
      // case 8:{this.route.navigate(['/quick']); this.appService.onQuick();break;}
      case 9:{this.route.navigate(['/radix']); this.appService.onRadix(); break;}
      case 10:{this.route.navigate(['/selection']);this.appService.onSelection();break;}
      // case 11:{this.route.navigate(['/shell']);this.appService.onShell();break;}
      }
    
    this.appService.sendArray.next(this.selected_algo);
  }
  
}
