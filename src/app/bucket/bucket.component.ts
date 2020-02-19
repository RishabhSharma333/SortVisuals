import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DialogComponent } from '../navigation/dialog/dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  constructor(private appService:AppService,public dialog: MatDialog) { }
  bucketArray:number[]=[];
  ones:number[]=[];
  twos:number[]=[];
  threes:number[]=[];
  fours:number[]=[];
  fives:number[]=[];
  sixes:number[]=[];
  present:boolean=true;
  message:string='';
  mode:string='Bucketing';
  
  ngOnInit() {
    this.appService.sendArray.subscribe(elementsPresent=>{
      if(elementsPresent==2){
        this.bucketArray.splice(0,this.bucketArray.length);
        this.ones.splice(0,this.ones.length);
        this.twos.splice(0,this.twos.length);
        this.threes.splice(0,this.threes.length);
        this.fours.splice(0,this.fours.length);
        this.fives.splice(0,this.fives.length);
        this.sixes.splice(0,this.sixes.length);
        this.message='';
        this.mode='Bucketing';
        this.present=false;
        let arr:number[]=this.appService.arrayget();
        let i:number;
        for(i=0;i<arr.length;i++){
          this.bucketArray.push(arr[i]);
         
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
  isCompeltelySorted(){
    if(this.bucketArray.length==10){
    let i:number;
    for(i=1;i<this.bucketArray.length;i++){
     if (this.bucketArray[i-1]>this.bucketArray[i]){return false;}
    }
    return true;
  }
  return false;
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
           console.log(id);
           console.log(event.previousContainer.id);
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
        else {//non-bucketing
          let dat:string[]=event.container.data;
          let numbers:number[]=[];
          let i:number;
          let one=this.ones.length;
          let two=this.twos.length;
          let three=this.threes.length;
          let four=this.fours.length;
          let five=this.fives.length;

          for(i=0;i<dat.length;i++ ){
              numbers[i]=+dat[i];
          }
          if(this.isSorted(numbers)){
            let idd=event.previousContainer.id;
            
            if(idd=='cdk-drop-list-2'){if(one>0){this.message='empty previous buckets first';}}
            else if(idd=='cdk-drop-list-3'){if(one>0&&two>0){this.message='empty previous buckets first';}}
            else if(idd=='cdk-drop-list-4'){if(one>0&&two>0&&three>0){this.message='empty previous buckets first';}}
            else if(idd=='cdk-drop-list-5'){if(one>0&&two>0&&three>0&&four>0){this.message='empty previous buckets first';}}
            else if(idd=='cdk-drop-list-6'){if(one>0&&two>0&&three>0&&four>0&&five>0){this.message='empty previous buckets first';}}
            else {this.message='Righty Placed in Initial Array ';}
            
          }
          else {this.message='Pick Elements from Correct Lists to place/Place at the last index to keep array sorted';}
           
        }
        
        
      }
      if(this.bucketArray.length==0){this.onStart();}
      if(this.isCompeltelySorted()){this.openDialog();}
  }
  onStart(){
    this.mode='non Bucketing';
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



