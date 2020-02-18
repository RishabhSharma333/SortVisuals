import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppService } from '../app.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  constructor(private appService:AppService) { }
  selectionArray:number[]=[];
  message:string='';
  
  ngOnInit() {
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==10){
        console.log(elementsPresent);
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.selectionArray.push(arr[i]);
        }
      }
    });
  }
drop(event: CdkDragDrop<number[]>) {

  moveItemInArray(this.selectionArray, event.previousIndex, event.currentIndex);
  let pre=event.previousIndex;
  let curr=event.currentIndex;
  if(curr>pre){this.message='Operate Elements from left To right';}
  else if(this.shortest(this.selectionArray,curr)){this.message=' Placed Correctly';}
  else {this.message='find smallest element from right Portion of array and place it in its correct position';}
  
}
shortest(arr:number[],end:number){
  if(arr.length>1){}
  let i:number;
  for(i=end+1;i<arr.length;i++){
    if(arr[i]<arr[end]){return false;}
  }
  if(end>0){
    for(i=end-1;i>0;i--){
    if(arr[i]>arr[end]){return false;}
  }
}
  
  return true;
}

}






