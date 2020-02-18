import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppService } from '../app.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor(private appService:AppService) { }
  shellArray:number[]=[];
  message:string='';
  gap:number=6;
  
  ngOnInit() {
    
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==11){
        console.log(elementsPresent);
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.shellArray.push(arr[i]);
        }
      }
    });
  }
drop(event: CdkDragDrop<number[]>) {
  moveItemInArray(this.shellArray, event.previousIndex, event.currentIndex);
    let pre=event.previousIndex;
    let curr=event.currentIndex;
    if(curr>pre){let swap=pre;pre=curr;curr=swap;}//so curr is always smaller
    if(pre-curr!=this.gap){this.message='Swap Elements according to given gap';}
    else { let pr=pre-1;
           let cur=curr-1;
          if(cur>0&&pr>0){if(this.shellArray[pr]<this.shellArray[cur]){this.message='Treat the previous Elements First';}}
          else if(this.shellArray[pre]<this.shellArray[curr]){this.message='Sort in Non Decreasing Order';}
           else this.message='Righty Placed';}
           if(pre==11&&this.message=='Rightly Placed'){this.onStart();}
}

onStart(){
  if(this.gap>1)
  {if(this.gap%2!=0)this.gap=this.gap-1;
  this.gap=this.gap/2;
}
  return;
}




}


