import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RiotStartpage } from "./riot/riot.startpage"
import { RiotResults } from "./riot/riot.results"
import { RiotFriends } from "./riot/riot.friends"

const routes: Routes = [
    {
        path: "",
        redirectTo: "/riot-start",
        pathMatch: "full"
    },
    {
        path: "riot-start",
        component: RiotStartpage
    },
    {
        path: "riot-friends",
        component: RiotFriends
    },
    {
        path: "riot-results/:summonerName",
        component: RiotResults,

    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
