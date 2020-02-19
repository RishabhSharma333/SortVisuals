import { Subject } from 'rxjs';

export class AppService{
    array:number[]=[];
     sendArray=new Subject<number>();
  onBubble(){
    var i:number;
    for(i=0;i<12;i++){
    this.array.push(Math.floor(Math.random()*98)+1);
  }
  
  } 
  onBucket(){
    var i:number;
    for(i=0;i<10;i++){
    this.array.push(Math.floor(Math.random()*6)+1);
  }
  
  }
 
  onCounting(){
    var i:number;
    for(i=0;i<9;i++){
    this.array.push(Math.floor(Math.random()*5)+1);
  }
  
  }
  onHeap(){
    var i:number;
    for(i=0;i<12;i++){
    this.array.push(Math.floor(Math.random()*99)+1);
  }
 
  }
  onInsertion(){
    var i:number;
    for(i=0;i<12;i++){
    this.array.push(Math.floor(Math.random()*300)+1);
  }
  
  }
  onMerge(){
    var i:number;
    for(i=0;i<16;i++){
    this.array.push(Math.floor(Math.random()*50)+1);
  }
  
  }
  onQuick(){
    var i:number;
    for(i=0;i<12;i++){
    this.array.push(Math.floor(Math.random()*50)+1);
  }
  
  }
  onRadix(){
    var i:number;
    for(i=0;i<8;i++){
    this.array.push(Math.floor(Math.random()*500)+111);
  }
  
  }
  onSelection(){
    var i:number;
    for(i=0;i<12;i++){
    this.array.push(Math.floor(Math.random()*60)+1);
  }
  
  }
  onShell(){
    var i:number;
    for(i=0;i<12;i++){
    this.array.push(Math.floor(Math.random()*60)+1);
  }
  
  }
arrayget(){return this.array.slice();}
onClear(){let arr:number[]=[];
  this.array=arr;}
}
