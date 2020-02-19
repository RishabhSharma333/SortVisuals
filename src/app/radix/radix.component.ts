import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-radix',
  templateUrl: './radix.component.html',
  styleUrls: ['./radix.component.css']
})
export class RadixComponent implements OnInit {

  constructor(private appService:AppService) { }
  bucketArray:number[]=[];
  ones:number[]=[];
  twos:number[]=[];
  threes:number[]=[];
  message:string='';
  
  ngOnInit() {
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==9){
        console.log(elementsPresent);
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.bucketArray.push(arr[i]);
         
        }
      }
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   
    }
     else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        
        
      
      }
      
  }
 
  isSorted(arr:number[]){
    if(arr.length>=2){
    let i:number;
    for(i=1;i<arr.length;i++){
     if(arr[i-1]>arr[i]){return false;}
    }
  }
  return true;
  }


}
