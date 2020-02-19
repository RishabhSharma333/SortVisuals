import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../navigation/dialog/dialog.component';


@Component({
  selector: 'app-heap',
  templateUrl: './heap.component.html',
  styleUrls: ['./heap.component.css']
})
export class HeapComponent implements OnInit {

  
  constructor(private appService:AppService,public dialog: MatDialog) { }
  heapArray:comp[]=[];
  message:string='';
  priorityArray:comp[]=[];
  mode='Priority Queue-making';
  present=false;
  
  ngOnInit() {
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==5){
        this.heapArray.splice(0,this.heapArray.length);
        this.message='';
        this.priorityArray.splice(0,this.priorityArray.length);
        this.present=true;
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.heapArray.push(new comp(arr[i],i));
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
         else if(event.previousContainer.id=='cdk-drop-list-1'&&event.previousIndex!=0){this.message='pick the elements from the top of priority queue only';}
         else this.message='Placed correctly';
      if(event.previousContainer.data.length==0){this.onStart();}
    }
    if(this.isCompeltelySorted()){this.openDialog();}
  }

onStart(){
  if(this.present&&this.priorityArray.length>0){
  this.mode='Array-Making';
  }
}
isCompeltelySorted(){
  if(this.heapArray.length==10){
    let i:number;
  for(i=1;i<this.heapArray.length;i++){
   if (this.heapArray[i-1]>this.heapArray[i]){return false;}
  }
  return true;
}
return false;
  
}

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
  if(arr.length>=2){
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



