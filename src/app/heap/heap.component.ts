import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppService } from '../app.service';

@Component({
  selector: 'app-heap',
  templateUrl: './heap.component.html',
  styleUrls: ['./heap.component.css']
})
export class HeapComponent implements OnInit {

  
  constructor(private appService:AppService) { }
  heapArray:comp[]=[];
  message:string='';
  priorityArray:comp[]=[];
  mode='Priority Queue-making';
  
  ngOnInit() {
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==5){
        console.log(elementsPresent);
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.heapArray.push(new comp(arr[i],i));
        }
      }
    });
  }
drop(event: CdkDragDrop<number[]>) {

  moveItemInArray(this.heapArray, event.previousIndex, event.currentIndex);
  console.log(event.previousIndex);
  console.log(event.currentIndex);

  
}
onStart(){this.mode='Array-Making';}
}
class comp{
  constructor(public value:number,public index:number){}
}



