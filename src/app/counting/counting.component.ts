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
  ones:number[]=[];
  twos:number[]=[];
  threes:number[]=[];
  fours:number[]=[];
  fives:number[]=[];
  message:string='';
  mode:string='counting';
  
  ngOnInit() {
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==4){
        this.countingArray.splice(0,this.countingArray.length);
        console.log(elementsPresent);
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.countingArray.push(arr[i]);
         
        }
      }
    });
  }
  drop(event: CdkDragDrop<string[]>) {}
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
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }


}
