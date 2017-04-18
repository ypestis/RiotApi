import { Component, OnInit } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { riot } from "./riot";

import "rxjs/add/operator/map";

@Component({
    selector: "ns-riot-startpage",
    moduleId: module.id,
    templateUrl: "./riot.startpage.html",
})
export class RiotStartpage implements OnInit {
    items: riot[];
    nick1 = "";
    
    constructor(private http: Http) {
     }

    find_user(){
        alert("Ta funkcja jest jeszcze niedostępna");
    }

    ngOnInit(): void {
        var http = require("http");
        http.getJSON("http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=yPestis").then(function (r) {
            console.dump(r);
        }, function (e) {
            console.dump(e);
        });
    }

    private onGetDataSuccess(res){
        console.dump(res);
    }
    
    private onGetDataError(error){
        console.dump(error);
    }
}

// http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=yPestis