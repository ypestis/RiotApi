import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RiotStartpage } from "./riot/riot.startpage"

const routes: Routes = [
    { path: "", redirectTo: "/riot-start", pathMatch: "full" },
    { path: "riot-start", component: RiotStartpage },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }