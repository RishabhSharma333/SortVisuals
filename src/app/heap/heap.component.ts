import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
         this.helperPriority(this.priorityArray);
         if((this.mode=='Array-Making')&&(!this.isSorted(this.heapArray))){this.message='Keep the Array sorted, just Put the element at first Position';}
      if(event.previousContainer.data.length==0){this.onStart();}
    }
  }

onStart(){this.mode='Array-Making';}

helperPriority(arr:comp[]){
  if(arr.length>0){
    let i:number;
   let  maxi:number=0;
  for(i=1;i<arr.length;i++){
    if(arr[i].value>arr[maxi].value){maxi=i;}
  }
  let swap=arr[0];
  arr[0]=arr[maxi];
  arr[maxi]=swap;
}
}//helper ends
isSorted(arr:comp[]){
  if(arr.length==2){
  let i:number;
  for(i=1;i<arr.length;i++){
   if(arr[i-1].value>arr[i].value){return false;}
  }
}
return true;
}
}
class comp{
  constructor(public value:number,public index:number){}
}



