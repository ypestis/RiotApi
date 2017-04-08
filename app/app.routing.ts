import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RiotList } from "./riot/riot.list"

const routes: Routes = [
    { path: "", redirectTo: "/riot", pathMatch: "full" },
    { path: "riot", component: RiotList },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }