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
  
  ngOnInit() {
    
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==8){
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


