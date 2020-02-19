import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../navigation/dialog/dialog.component';

@Component({
  selector: 'app-radix',
  templateUrl: './radix.component.html',
  styleUrls: ['./radix.component.css']
})
export class RadixComponent implements OnInit {

  constructor(private appService:AppService,public dialog: MatDialog) { }
  radixArray:number[]=[];
  ones:number[]=[];
  twos:number[]=[];
  threes:number[]=[];
  message:string='';
  present:boolean=true;
  mode:number;
  
  ngOnInit() {
    this.appService.sendArray.subscribe(elementsPresent=>{
      this.message='';
      if(elementsPresent==9){
       this.radixArray.splice(0,this.radixArray.length);
       this.ones.splice(0,this.ones.length);
       this.twos.splice(0,this.twos.length);
       this.threes.splice(0,this.threes.length);

       this.present=false;
        
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.radixArray.push(arr[i]);
         
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
   
    }
     else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        let idd=event.container.id;
        let dd=event.previousContainer.id;
        if(idd=='cdk-drop-list-1'){
          if(dd!='cdk-drop-list-0'){this.message='Pick elemnts from the given array .Put the element back in the same place to Proceed Correctly';}
          else {
             if(event.currentIndex!=this.ones.length-1){this.message='You did not place the element at last Index ';} 
             else  if(!this.isOneSorted()){this.message='You picked the wrong element to place';}
               else {this.message='Element Placed correctly';}
          }
        }
        if(idd=='cdk-drop-list-2'){
          if(dd!='cdk-drop-list-1'){this.message='Pick elemnts from the array of Ones Place .Put the element back in the same place to Proceed Correctly';}
          else {
             if(event.currentIndex!=this.twos.length-1){this.message='You did not place the element at last Index ';} 
            else if(!this.isTwoSorted()){this.message='You picked the wrong element to place';}
               else {this.message='Element Placed correctly';}
          }
        }
        if(idd=='cdk-drop-list-3'){
          if(dd!='cdk-drop-list-2'){this.message='Pick elemnts from the array of Twos Place.Put the element back in the same place to Proceed Correctly';}
          else {
            if(event.currentIndex!=this.threes.length-1){this.message='You did not place the element at last Index ';} 
           else if(!this.isThreeSorted()){this.message='You picked the wrong element to place';}
               else {this.message='Element Placed correctly';}
          }
        }
        }
        
  if(this.isCompeltelySorted()){this.openDialog();}
       
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
  getSecond(num:number){
    return Math.trunc((num%100)/10);
  }
  getThird(num:number){
    return Math.trunc(num/100);
  }
  isOneSorted(){
    if(this.ones.length>1){

      let i:number;
      for(i=1;i<this.ones.length;i++){
        let a=this.ones[i]%10;
        let b=this.ones[i-1]%10;
        if(b>a)return false;
      }
    }return true;
  }
  isTwoSorted(){
    if(this.twos.length>1){

      let i:number;
      for(i=1;i<this.twos.length;i++){
        let a=this.getSecond(this.twos[i]);
        let b=this.getSecond(this.twos[i-1])
        if(b>a)return false;
      }
    }return true;
  }
  isThreeSorted(){
    if(this.threes.length>1){

      let i:number;
      for(i=1;i<this.threes.length;i++){
        let a=this.getThird(this.threes[i]);
        let b=this.getThird(this.threes[i-1])
        if(b>a)return false;
      }
    }return true;
  }
  isCompeltelySorted(){
    if(this.threes.length==6){
      let i:number;
    for(i=1;i<this.threes.length;i++){
     if (this.threes[i-1]>this.threes[i]){return false;}
    }
    return true;
  }
  return false;
    
  }


}
