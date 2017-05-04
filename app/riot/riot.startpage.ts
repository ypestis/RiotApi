import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "ns-riot-startpage",
    moduleId: module.id,
    templateUrl: "./riot.startpage.html",
})
export class RiotStartpage {
    nickname = "";

    constructor(private router: Router) {
     }

    find_user(){
        this.router.navigate(['/riot-results', this.nickname]);
    }
    check_friends(){
        this.router.navigate(['/riot-friends']);
    }
}

// http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=yPestis
