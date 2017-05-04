import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';

import { RiotStartpage } from "./riot/riot.startpage"
import { RiotResults } from "./riot/riot.results"
import { RiotFriends } from "./riot/riot.friends"
import { TabsComponent } from './riot/riot.tabs';
import { TabComponent } from './riot/riot.tab';

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
        RiotStartpage,
        RiotResults,
        RiotFriends,
        TabComponent,
        TabsComponent,
    ],
    providers: [
        TabComponent,
        TabsComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
