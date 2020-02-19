import { NgModule } from "@angular/core";
import {
    MatSidenavModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    MatDialogModule,
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
     MatSliderModule,
     MatDialogModule

    ],
    exports:[
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatSelectModule,
     DragDropModule,
     MatSliderModule,
     MatDialogModule

    ]
})
export class AppMaterial{}