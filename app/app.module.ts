import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';

import { RiotList } from "./riot/riot.list"

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        RiotList
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
