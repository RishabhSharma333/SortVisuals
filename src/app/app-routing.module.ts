import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './navigation/welcome/welcome.component';
import { BubbleComponent } from './bubble/bubble.component';
import { BucketRadixComponent } from './bucket-radix/bucket-radix.component';
import { CountingComponent } from './counting/counting.component';
import { HeapComponent } from './heap/heap.component';
import { InsertionComponent } from './insertion/insertion.component';
import { MergeComponent } from './merge/merge.component';
import { QuickComponent } from './quick/quick.component';
import { RadixComponent } from './radix/radix.component';
import { SelectionComponent } from './selection/selection.component';
import { ShellComponent } from './shell/shell.component';


const routes: Routes = [
  {path: '',component:WelcomeComponent},
  {path:'bubble',component:BubbleComponent},
  {path:'bucket-radix',component:BucketRadixComponent},
  {path:'counting',component:CountingComponent},
  {path:'heap',component:HeapComponent},
  {path:'insertion',component:InsertionComponent},
  {path:'merge',component:MergeComponent},
  {path:'quick',component:QuickComponent},
  {path:'radix',component:RadixComponent},
  {path:'selection',component:SelectionComponent},
  {path:'shell',component:ShellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
