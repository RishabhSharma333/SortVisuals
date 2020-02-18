import { NgModule } from "@angular/core";
import {
    MatSidenavModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    } from "@angular/material";
import{DragDropModule} from "@angular/cdk/drag-drop";
@NgModule({
    imports:[
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatSelectModule,
     DragDropModule,
     MatSliderModule

    ],
    exports:[
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatSelectModule,
     DragDropModule,
     MatSliderModule

    ]
})
export class AppMaterial{}