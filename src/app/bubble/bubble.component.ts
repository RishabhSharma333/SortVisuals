import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {
  constructor(private appService:AppService) { }
  bubbleArray:comp[]=[];
  message:string='';
  
  ngOnInit() {
    
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==1){
        this.bubbleArray.splice(0,this.bubbleArray.length);
        this.message='';
        console.log(elementsPresent);
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.bubbleArray.push(new comp(arr[i],i));
          // if(i>0&&!this.changed){if(this.bubbleArray[i]>this.bubbleArray[i-1]){this.firstPlace=i-1;this.secondPlace=i;}}
        }
      }
    });
  }
drop(event: CdkDragDrop<number[]>) {

  moveItemInArray(this.bubbleArray, event.previousIndex, event.currentIndex);
  console.log(event.previousIndex);
  console.log(event.currentIndex);
  if(this.bubbleArray[event.previousIndex].value>this.bubbleArray[event.currentIndex].value){
    this.message="Wrong Move, Sort in non-decreasing order";
  }
  else if(event.currentIndex-event.previousIndex!=1){ this.message='Wrong move, We operate Bubble Sort with neighbour indices';}
  else this.message='Fine move';
  console.log(this.bubbleArray);
}


}
class comp{
  constructor(public value:number,public index:number){}
}

  

