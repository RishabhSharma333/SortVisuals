import { NgModule } from "@angular/core";
import {
    MatSidenavModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
} from "@angular/material";
@NgModule({
    imports:[
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule
    ],
    exports:[
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule
    ]
})
export class AppMaterial{}