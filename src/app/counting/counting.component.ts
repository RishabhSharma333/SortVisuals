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
  
  isSorted(arr:number[]){
    if(arr.length==2){
    let i:number;
    for(i=1;i<arr.length;i++){
     if(arr[i-1]>arr[i]){return false;}
    }
  }
  return true;
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }


}
