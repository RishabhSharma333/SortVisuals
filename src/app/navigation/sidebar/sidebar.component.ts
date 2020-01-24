import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

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
      {number:3,alg:'Bucket-Radix'},
      {number:4,alg:'Counting'},
      {number:5,alg:'Heap'},
      {number:6,alg:'Insertion'},
      {number:7,alg:'Merge'},
      {number:8,alg:'Quick'},
      {number:9,alg:'Radix'},
      {number:10,alg:'Selection'},
      {number:11,alg:'Shell'}
    ]; 

  constructor(private appService:AppService){}
  ngOnInit(){}
  onGenerate(){
    // console.log(this.selected_algo);
    switch (this.selected_algo){
      case 1:{ this.appService.onBubble();break;}
      case 3:{ this.appService.onBucketRadix();break;}
      case 4:{ this.appService.onCounting();break;}
      case 5:{ this.appService.onHeap();break;}
      case 6:{ this.appService.onInsertion(); break;}
      case 7:{ this.appService.onMerge();break;}
      case 2:{ this.appService.onBucket();break;}
      case 8:{ this.appService.onQuick();break;}
      case 9:{ this.appService.onRadix(); break;}
      case 10:{this.appService.onSelection();break;}
      case 11:{this.appService.onShell();break;}
      }
    
    this.appService.sendArray.next(this.selected_algo);
  }
  
}
