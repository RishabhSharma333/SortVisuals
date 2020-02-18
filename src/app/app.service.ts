import { Subject } from 'rxjs';

export class AppService{
    array:number[]=[];
     sendArray=new Subject<number>();
  onBubble(){
    var i:number;
    for(i=0;i<23;i++){
    this.array.push(Math.floor(Math.random()*98)+1);
  }
  
  } 
  onBucket(){
    var i:number;
    for(i=0;i<23;i++){
    this.array.push(Math.floor(Math.random()*8)+1);
  }
  
  }
  onBucketRadix(){
    var i:number;
    for(i=0;i<8;i++){
    this.array.push(Math.floor(Math.random()*10)+1);
  }
  for(i=0;i<6;i++){
    this.array.push(Math.floor(Math.random()*100)+1);
  }
  for(i=0;i<6;i++){
    this.array.push(Math.floor(Math.random()*1000)+1);
  }
  for(i=0;i<3;i++){
    this.array.push(Math.floor(Math.random()*10000)+1);
  }
  
  }
  onCounting(){
    var i:number;
    for(i=0;i<23;i++){
    this.array.push(Math.floor(Math.random()*10)+1);
  }
  
  }
  onHeap(){
    var i:number;
    for(i=0;i<40;i++){
    this.array.push(Math.floor(Math.random()*100)+1);
  }
 
  }
  onInsertion(){
    var i:number;
    for(i=0;i<23;i++){
    this.array.push(Math.floor(Math.random()*300)+1);
  }
  
  }
  onMerge(){
    var i:number;
    for(i=0;i<23;i++){
    this.array.push(Math.floor(Math.random()*50)+1);
  }
  
  }
  onQuick(){
    var i:number;
    for(i=0;i<23;i++){
    this.array.push(Math.floor(Math.random()*50)+1);
  }
  
  }
  onRadix(){
    var i:number;
    for(i=0;i<23;i++){
    this.array.push(Math.floor(Math.random()*1000)+1);
  }
  
  }
  onSelection(){
    var i:number;
    for(i=0;i<23;i++){
    this.array.push(Math.floor(Math.random()*60)+1);
  }
  
  }
  onShell(){
    var i:number;
    for(i=0;i<23;i++){
    this.array.push(Math.floor(Math.random()*60)+1);
  }
  
  }
arrayget(){return this.array.slice();}
}
