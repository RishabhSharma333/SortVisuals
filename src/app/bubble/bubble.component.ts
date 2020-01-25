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
  bubbleArray:number[]=[];
  

  ngOnInit() {
    this.appService.sendArray.subscribe(term=>{
      if(term==1){
        console.log(term);
        this.bubbleArray=this.appService.arrayget();
      }
    });
  

}
drop(event: CdkDragDrop<number[]>) {
  moveItemInArray(this.bubbleArray, event.previousIndex, event.currentIndex);
}
onStart(){
  if(this.bubbleArray.length>0){
     let i:number;
     let min=100000;
     let mini;
     for (i=0;i<this.bubbleArray.length;i++){
       if(min>this.bubbleArray[i]){
         min=this.bubbleArray[i];
        mini=i;}
        }
        
    
  }
  
}
}
