import { NgModule } from "@angular/core";
import {
    MatSidenavModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    } from "@angular/material";
import{DragDropModule} from "@angular/cdk/drag-drop";
@NgModule({
    imports:[
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatSelectModule,
     DragDropModule

    ],
    exports:[
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatSelectModule,
     DragDropModule

    ]
})
export class AppMaterial{}