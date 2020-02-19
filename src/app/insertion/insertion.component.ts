import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppService } from '../app.service';
import { DialogComponent } from '../navigation/dialog/dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-insertion',
  templateUrl: './insertion.component.html',
  styleUrls: ['./insertion.component.css']
})
export class InsertionComponent implements OnInit {

 
  constructor(private appService:AppService,public dialog: MatDialog) { }
  insertionArray:number[]=[];
  message:string='';
  
  ngOnInit() {
    
    this.appService.sendArray.subscribe(elementsPresent=>{
      this.insertionArray.splice(0,this.insertionArray.length);
      this.message='';
      if(elementsPresent==6){
        console.log(elementsPresent);
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.insertionArray.push(arr[i]);
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

  moveItemInArray(this.insertionArray, event.previousIndex, event.currentIndex);
 if(event.previousIndex<event.currentIndex){this.message='Keep left  part of Array Completely sorted and pick elements from right';}
 else{
   if(this.isSorted(this.insertionArray,event.previousIndex)){
     this.message='Rightly Placed';}
     else {this.message='Not Placed Correctly/Picked Wrong Element ';}
}
if(this.isCompeltelySorted()){this.openDialog();}

}
isCompeltelySorted(){
  let i:number;
  for(i=1;i<this.insertionArray.length;i++){
   if (this.insertionArray[i-1]>this.insertionArray[i]){return false;}
  }
  return true;
}
isSorted(arr:number[],end:number){
  if(end>1){
  let i:number;
  for(i=1;i<=end;i++){
   if(arr[i-1]>arr[i]){return false;}
  }

}
return true;
}


}


