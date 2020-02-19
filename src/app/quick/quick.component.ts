import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-quick',
  templateUrl: './quick.component.html',
  styleUrls: ['./quick.component.css']
})
export class QuickComponent implements OnInit {

  constructor(private appService:AppService) { }
  quickArray:number[]=[];
  message:string='';
  mode:boolean=false;
  pivot:number=11;
  
  ngOnInit() {
    
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==8){
        this.message='';
        this.quickArray.splice(0,this.quickArray.length);
        console.log(elementsPresent);
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.quickArray.push(arr[i]);
        }
      }
    });
  }
drop(event: CdkDragDrop<number[]>) {

  moveItemInArray(this.quickArray, event.previousIndex, event.currentIndex);
    let pre=event.previousIndex;
    let curr=event.currentIndex;
    
    if(this.isOkay(this.quickArray,curr,this.pivot)){
      this.message='Placed Correctly';
    }
    else {this.message='Place the elements according to pivot';}
    if(pre==this.pivot){this.pivot=curr-1;}
    if(this.pivot==0){this.pivot=11;}
 
}
onStart(){
  this.mode=!this.mode;
}
isOkay(arr:number[],ind:number,pivotIndex:number){
  if(ind>0){
    let i:number;
    for(i=0;i<=ind;i++)if(arr[i]>arr[pivotIndex]){return false;}
  }return true;
}
isSorted(arr:number[],start:number,end:number){
  if(end<start){let swap=start;start=end;end=swap;}
  if(end-start>0){
  let i:number;
  for(i=start+1;i<=end;i++){
   if(arr[i-1]>arr[i]){return false;}
  }

}
return true;
}


}


