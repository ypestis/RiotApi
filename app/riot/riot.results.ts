import { Component, OnInit } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { summonerModel } from "./summoner.model";

import "rxjs/add/operator/map";
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {Observable} from 'data/observable';
import "ui/segmented-bar";

import pageModule = require("ui/page");
// FrameModule is needed in order to have an option to navigate to the new page.
import frameModule = require("ui/frame");

@Component({
    selector: "ns-riot-results",
    moduleId: module.id,
    templateUrl: "./riot.results.html",
})
export class RiotResults implements OnInit {
    summoner: summonerModel;
    nick1 = "";

    apiLink = "http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=";
    errorMessage = '';
    totalGames : number;
    playerList: Array<Object> = [];
    master : number;
    public foo : string;
    public connectionType : string;
    public message: number = 50;
    public wtf: string = 'Kliknij tu kurwa mać!';


    constructor( private route: ActivatedRoute, private router: Router, private http: Http ) {}

    ngOnInit(): void {
        this.nick1 = this.route.params['_value']['summonerName'];
        this.apiLink += this.nick1;
        this.http.get(this.apiLink)
                    .map(this.extractData)
                    .subscribe(
                        data => {
                            this.summoner = data;
                            console.dir(data);
                            this.playerList.push(data);
                        }
                    );
    }
    private extractData(res: Response) {

        let body = res.json();
        return body;
    }

    public onTap(){
        this.wtf = 'Kliknij tu kurwa mać!';
    }

    public ngOnChange(val: number) {
        // this.connectionType = val;
        console.log(val);

        this.message = val;
        console.dir(this.message);
        this.onTap();
    }
}

// http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=yPestis
