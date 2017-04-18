import { Component, OnInit } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { summonerModel } from "./summoner.model";

import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

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
    
    constructor( private route: ActivatedRoute, private router: Router, private http: Http ) {}

    ngOnInit(): void {
        this.nick1 = this.route.params['_value']['summonerName'];
        this.apiLink += this.nick1;
        this.http.get(this.apiLink)
                    .map(this.extractData)
                    .subscribe(
                        data => this.summoner = data
                    );
        
    }
    private extractData(res: Response) {
        
        let body = res.json();
        return body;
    }

    find_user(){
        console.dump(this.summoner);
    }
}

// http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=yPestis