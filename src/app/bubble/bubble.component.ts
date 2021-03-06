import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../navigation/dialog/dialog.component';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {
  constructor(private appService:AppService,public dialog: MatDialog) { }
  bubbleArray:number[]=[];
  message:string='';
  
  ngOnInit() {
    
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==1){
        this.bubbleArray.splice(0,this.bubbleArray.length);
        this.message='';
        console.log(elementsPresent);
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.bubbleArray.push(arr[i]);
          }
      }
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
drop(event: CdkDragDrop<number[]>) {

  moveItemInArray(this.bubbleArray, event.previousIndex, event.currentIndex);
  if(this.bubbleArray[event.previousIndex]>this.bubbleArray[event.currentIndex]){
    this.message="Wrong Move, Sort in non-decreasing order";
  }
  else if(event.currentIndex-event.previousIndex!=1){ this.message='Wrong move, We operate Bubble Sort with neighbour indices';}
  else {let id:number;
    let correct:boolean=true;
    for(id=0;id<event.currentIndex;id++){if(this.bubbleArray[id]>this.bubbleArray[event.currentIndex]){ correct=false;break;}}
    if(correct){this.message='Fine move';}
    else {this.message='Treat previous elements first';}
  }
  if(this.isCompeltelySorted()){this.openDialog();}
}
isCompeltelySorted(){
  let i:number;
  for(i=1;i<this.bubbleArray.length;i++){
   if (this.bubbleArray[i-1]>this.bubbleArray[i]){return false;}
  }
  return true;
}


}


  

