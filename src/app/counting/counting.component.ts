import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {

  constructor(private appService:AppService) { }
  countingArray:number[]=[];
  ones=0;
  twos:number=0;
  threes:number=0;
  fours:number=0;
  fives:number=0;
  message:string='';
  mode:boolean =true;
  
  
  ngOnInit() {
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==4){
        this.countingArray.splice(0,this.countingArray.length);
        this.message='';
        console.log(elementsPresent);
        let arr:number[]=this.appService.arrayget();
        let i:number;
        this.mode=false;
        for(i=0;i<arr.length;i++){
          this.countingArray.push(arr[i]);
         
        }
      }
    });
  }
  drop(event: CdkDragDrop<string[]>) {}
  onStart(){
    if(!this.mode){
      let f:number;
      let o:number=0;
      let t:number=0;
      let th:number=0;
      let fo:number=0;
      let fi:number=0;

      for(f=0;f<this.countingArray.length;f++){
       if(this.countingArray[f]==1){o++;}
       if(this.countingArray[f]==2){t++;}
       if(this.countingArray[f]==3){th++;}
       if(this.countingArray[f]==4){fo++;}
       if(this.countingArray[f]==5){fi++;}
      }
      if(o==this.ones&&t==this.twos&&th==this.threes&&fo==this.fours&&fi==this.fives){
      let arr:number[]=[];
     let i:number;
     for(i=0;i<this.ones;i++){arr.push(1);}
     for(i=0;i<this.twos;i++){arr.push(2);}
     for(i=0;i<this.threes;i++){arr.push(3);}
     for(i=0;i<this.fours;i++){arr.push(4);}
     for(i=0;i<this.fives;i++){arr.push(5);}
     this.countingArray=arr;this.message='you have your array sorted';}
     else {
       this.message='Make your count correct';
     }
  }
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
