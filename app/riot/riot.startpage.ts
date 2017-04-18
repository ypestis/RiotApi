import { Component } from "@angular/core";
import { Router } from "@angular/router";

import "rxjs/add/operator/map";

@Component({
    selector: "ns-riot-startpage",
    moduleId: module.id,
    templateUrl: "./riot.startpage.html",
})
export class RiotStartpage {
    nick1 = "";
    
    constructor(private router: Router) {
     }

    find_user(){
        this.router.navigate(['/riot-results', this.nick1]);
    }
}

// http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=yPestis