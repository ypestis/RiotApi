import { Component, OnInit } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Router, ActivatedRoute, Params } from '@angular/router';

import "rxjs/add/operator/map";

@Component({
    selector: "riot-friends",
    moduleId: module.id,
    templateUrl: "./riot.friends.html",
})
export class RiotFriends implements OnInit {
    getFriendsLink = "http://ckaminski.pl/riotapi/getFriend.php?getFriends";
    deleteFriends = "http://ckaminski.pl/riotapi/getFriend.php?deleteFriend=";
    playerList: Array<Object> = [];

    constructor( private route: ActivatedRoute, private router: Router, private http: Http ) {}

    ngOnInit(): void {
        console.log("jeste w friedns;");
        this.http.get(this.getFriendsLink)
                    .map(this.extractData)
                    .subscribe(
                        data => {
                            console.dir(data);
                            for (let entry of data) {
                                this.playerList.push(entry);
                            }
                        }
                    );
    }

    private extractData(res: Response) {

        let the_bodies_hit_the_floor = res.json();
        return the_bodies_hit_the_floor;
    }

    public onItemTap(args) {
        //console.log("Item Tapped at cell index: " + args.index);
        console.dir(args.view.bindingContext);
    }

    public deleteFriend(index){
        var link = this.deleteFriends + index;
        this.http.get(link)
                    .map(this.extractData)
                    .subscribe(
                        data => {
                            this.playerList.splice(index, 1);
                            alert("Usunięto znajomego!")
                        }
                    );
    }

    public showFriend(item){
        this.router.navigate(['/riot-results', item]);
    }
}
