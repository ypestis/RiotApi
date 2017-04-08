import { Component, OnInit } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { riot } from "./riot";

import "rxjs/add/operator/map";

@Component({
    selector: "ns-riot-list",
    moduleId: module.id,
    templateUrl: "./riot.list.html",
})
export class RiotList implements OnInit {
    items: riot[];

    

    constructor(/*private http: Http*/) {
     }

    ngOnInit(): void {
        // var layout = require("ui/layouts/grid-layout");
        // var resp = this.http.get("https://eune.api.riotgames.com/api/lol/EUNE/v1.3/stats/by-summoner/22067792/ranked?api_key=RGAPI-13F080C8-3E30-4CDE-9428-9D75BACACF7E")
        // .subscribe(
        //     (result) => this.onGetDataSuccess(result),
        //     (error) => this.onGetDataError(error)
        // );

            
    }

    // private onGetDataSuccess(res){
    //     console.log(res.summonerId);
    // }
    
    // private onGetDataError(error){
    //     console.dump(error);
    // }
}