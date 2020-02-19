import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { BubbleComponent } from './bubble/bubble.component';
import { BucketComponent } from './bucket/bucket.component';
import { BucketRadixComponent } from './bucket-radix/bucket-radix.component';
import { CountingComponent } from './counting/counting.component';
import { MergeComponent } from './merge/merge.component';
import { QuickComponent } from './quick/quick.component';
import { InsertionComponent } from './insertion/insertion.component';
import { SelectionComponent } from './selection/selection.component';
import { HeapComponent } from './heap/heap.component';
import { ShellComponent } from './shell/shell.component';
import { RadixComponent } from './radix/radix.component';
import { WelcomeComponent } from './navigation/welcome/welcome.component';
import { AppMaterial } from './app-material.module';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BubbleComponent,
    BucketComponent,
    BucketRadixComponent,
    CountingComponent,
    MergeComponent,
    QuickComponent,
    InsertionComponent,
    SelectionComponent,
    HeapComponent,
    ShellComponent,
    RadixComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterial
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
