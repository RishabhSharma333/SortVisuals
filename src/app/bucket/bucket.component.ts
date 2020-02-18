import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  constructor(private appService:AppService) { }
  bucketArray:number[]=[];
  ones:number[]=[];
  twos:number[]=[];
  threes:number[]=[];
  fours:number[]=[];
  fives:number[]=[];
  sixes:number[]=[];
  message:string='';
  mode:string='Bucketing';
  
  ngOnInit() {
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==2){
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
   
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        
        
        if(this.mode=='Bucketing'){
          if(event.previousContainer.id!='cdk-drop-list-0'){this.message='Move Elements from Parent list only';}
          else{let id=event.container.id;
           
            if(id=='cdk-drop-list-1'){
              let i:number;for(i=0;i<event.container.data.length;i++){if(+event.container.data[i]!=1){this.message='Not Placed Correctly';break;}this.message='Rightly Placed';}
            }
            if(id=='cdk-drop-list-2'){
              let i:number;for(i=0;i<event.container.data.length;i++){if(+event.container.data[i]!=2){this.message='Not Placed Correctly';break;}this.message='Rightly Placed';}
            }
            
            if(id=='cdk-drop-list-3'){
              let i:number;for(i=0;i<event.container.data.length;i++){if(+event.container.data[i]!=3){this.message='Not Placed Correctly';break;}this.message='Rightly Placed';}
            }
            
            if(id=='cdk-drop-list-4'){
              let i:number;for(i=0;i<event.container.data.length;i++){if(+event.container.data[i]!=4){this.message='Not Placed Correctly';break;}this.message='Rightly Placed';}
            }
            
            if(id=='cdk-drop-list-5'){
              let i:number;for(i=0;i<event.container.data.length;i++){if(+event.container.data[i]!=5){this.message='Not Placed Correctly';break;}this.message='Rightly Placed';}
            }
            
            if(id=='cdk-drop-list-6'){
              let i:number;for(i=0;i<event.container.data.length;i++){if(+event.container.data[i]!=6){this.message='Not Placed Correctly';break;}this.message='Rightly Placed';}
            }
            
          }
        }
        else {let dat:string[]=event.container.data;
          let numbers:number[]=[];
          let i:number;
          for(i=0;i<dat.length;i++ ){
              numbers[i]=+dat[i];
          }
          if(this.isSorted(numbers)){
            this.message='Righty Placed in Initial Array ';
          }
          else {this.message='Pick Elements from Correct Lists to place it into Initial array and  Hence Make Your array sorted ';}
           
        }
        
        
      }
      if(this.bucketArray.length==0){this.onStart();}
  }
  onStart(){
    this.mode='non Bucketing';
  }
  isSorted(arr:number[]){
    if(arr.length==2){
    let i:number;
    for(i=1;i<arr.length;i++){
     if(arr[i-1]>arr[i]){return false;}
    }
  }
  return true;
  }


}



