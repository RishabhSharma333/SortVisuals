import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppService } from '../app.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor(private appService:AppService) { }
  mergeArray:number[]=[];
  message:string='';
  mode:boolean=false;
  
  ngOnInit() {
    
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==7){
        this.message='';
        this.mergeArray.splice(0,this.mergeArray.length);
        console.log(elementsPresent);
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.mergeArray.push(arr[i]);
        }
      }
    });
  }
drop(event: CdkDragDrop<number[]>) {

  moveItemInArray(this.mergeArray, event.previousIndex, event.currentIndex);
  if(!this.mode)//means when sorting 
  {
   let start=event.previousIndex;
   let end=event.currentIndex;
   
   if(!((start-end==1)||(end-start==1))){this.message='Sort only with Two neighbouring elements';}
   
   else //when doing with neighbouring Elements
    {
      if((end==0&&start==1)||(end==1&&start==0)){
        if(this.isSorted(this.mergeArray,end,start)){this.message='Sorted a small portion';}
        else {this.message='follow Non-Decreasing Order';}
      }
     else if((end==2&&start==3)||(end==3&&start==2)){
       if(!this.isSorted(this.mergeArray,0,1)){this.message='Sort Previous Portion First';}//to check prevoius Sorting Order
       else {
        if(this.isSorted(this.mergeArray,end,start)){this.message='Sorted a small portion';}
        else {this.message='follow Non-Decreasing Order';}
       }
     }
     else if((end==4&&start==5)||(end==5&&start==4)){
      if(!this.isSorted(this.mergeArray,0,3)){this.message='Sort Previous Portion First';}//to check prevoius Sorting Order
      else {
       if(this.isSorted(this.mergeArray,end,start)){this.message='Sorted a small portion';}
       else {this.message='follow Non-Decreasing Order';}
      }
     }
     else if((end==6&&start==7)||(end==7&&start==6)){
      if(!(this.isSorted(this.mergeArray,0,3)&&this.isSorted(this.mergeArray,4,5))){this.message='Sort Previous Portion First';}//to check prevoius Sorting Order
      else {
       if(this.isSorted(this.mergeArray,end,start)){this.message='Sorted a small portion';}
       else {this.message='follow Non-Decreasing Order';}
      }
     }
     else if((end==8&&start==9)||(end==9&&start==8)){
      if(!(this.isSorted(this.mergeArray,0,7))){this.message='Sort Previous Portion First';}//to check prevoius Sorting Order
      else {
       if(this.isSorted(this.mergeArray,end,start)){this.message='Sorted a small portion';}
       else {this.message='follow Non-Decreasing Order';}
      }
     }
     else if((end==10&&start==11)||(end==11&&start==10)){
      if(!(this.isSorted(this.mergeArray,0,7)&&this.isSorted(this.mergeArray,8,9))){this.message='Sort Previous Portion First';}//to check prevoius Sorting Order
      else {
       if(this.isSorted(this.mergeArray,end,start)){this.message='Sorted a small portion';}
       else {this.message='follow Non-Decreasing Order';}
      }
     }
     else if((end==12&&start==13)||(end==13&&start==12)){
      if(!(this.isSorted(this.mergeArray,0,7)&&this.isSorted(this.mergeArray,8,11))){this.message='Sort Previous Portion First';}//to check prevoius Sorting Order
      else {
       if(this.isSorted(this.mergeArray,end,start)){this.message='Sorted a small portion';}
       else {this.message='follow Non-Decreasing Order';}
      }
     }
     else if((end==14&&start==15)||(end==15&&start==14)){
      if(!(this.isSorted(this.mergeArray,0,7)&&this.isSorted(this.mergeArray,8,15))){this.message='Sort Previous Portion First';}//to check prevoius Sorting Order
      else {
       if(this.isSorted(this.mergeArray,end,start)){this.message='Sorted a small portion';}
       else {this.message='follow Non-Decreasing Order';}
      }
     }
      else{this.message='follow Merge Sort';}
    }
  }
  else //means when merging
  {
   let start=event.previousIndex;
   let end=event.currentIndex;
   if((end<=3&&start>=0)||(start<=3&&end>=0)){
     if(this.isSorted(this.mergeArray,start,end)){this.message='you have Sorted small part ';}
     else {this.message='Please Follow Proper Merging Order';}
   }
   else if((end>=4&&start<=7)||(start>=4&&end<=7)){
     let done=this.isSorted(this.mergeArray,0,3);
     if(!done){this.message='Sort Previous Portions first';
    }
     else {
       if(this.isSorted(this.mergeArray,start,end)){this.message='you have Sorted a small part ';}
       else {this.message='Please Follow Proper Merging Order';}
    }
   }

   else if((end>=0&&start<=7)||(start>=0&&end<=7)){
    let done=this.isSorted(this.mergeArray,0,3)&&this.isSorted(this.mergeArray,4,7);
    if(!done){this.message='Sort Previous Portions first';
   }
    else {
      if(this.isSorted(this.mergeArray,start,end)){this.message='you have Sorted  a small part ';}
      else {this.message='Please Follow Proper Merging Order';}
   }
   }

   else if((end>=8&&start<=11)||(start>=8&&end<=11)){
    let done=this.isSorted(this.mergeArray,0,7);
    if(!done){this.message='Sort Previous Portions first';
   }
    else {
      if(this.isSorted(this.mergeArray,start,end)){this.message='you have Sorted small part ';}
      else {this.message='Please Follow Proper Merging Order';}
   }
   }

   else if((end>=12&&start<=15)||(start>=12&&end<=15)){
    let done=this.isSorted(this.mergeArray,0,7)&&this.isSorted(this.mergeArray,8,11);
    if(!done){this.message='Sort Previous Portions first';
   }
    else {
      if(this.isSorted(this.mergeArray,start,end)){this.message='you have Sorted small part ';}
      else {this.message='Please Follow Proper Merging Order';}
   }
   }

   else if((end>=1&&start<=15)||(start>=1&&end<=15)){
    let done=this.isSorted(this.mergeArray,0,7)&&this.isSorted(this.mergeArray,8,15);
    if(!done){this.message='Sort Previous Portion first';
   }
    else {
      if(this.isSorted(this.mergeArray,start,end)){this.message='you have Sorted small part ';}
      else {this.message='Please Follow Proper Merging Order';}
   }
   }
  
  }
 
}
onStart(){
  this.mode=!this.mode;
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

