import { Component, OnInit } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { summonerModel } from "./summoner.model";

import "rxjs/add/operator/map";

import pageModule = require("ui/page");

@Component({
    selector: "ns-riot-results",
    moduleId: module.id,
    templateUrl: "./riot.results.html",
})
export class RiotResults implements OnInit {
    summoner: summonerModel;
    nickname = "";
    apiLink = "http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=";
    playerList: Array<Object> = [];

    constructor( private route: ActivatedRoute, private router: Router, private http: Http ) {}

    ngOnInit(): void {
        this.apiLink += this.route.params['_value']['summonerName'];
        this.http.get(this.apiLink)
                    .map(this.extractData)
                    .subscribe(
                        data => {
                            this.summoner = data;
                            // console.dir(data);
                            this.playerList.push(data);
                        }
                    );
    }
    private extractData(res: Response) {

        let the_bodies_hit_the_floor = res.json();
        return the_bodies_hit_the_floor;
    }

    public onNavBtnTap(): void{
        this.router.navigate(['']);
    }
}

// http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=yPestis
