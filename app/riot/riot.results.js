"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var RiotResults = (function () {
    function RiotResults(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.nickname = "";
        this.apiLink = "http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=";
        this.addFriend = "http://ckaminski.pl/riotapi/getFriend.php?addFriend=";
        this.playerList = [];
    }
    RiotResults.prototype.ngOnInit = function () {
        var _this = this;
        this.apiLink += this.route.params['_value']['summonerName'];
        this.http.get(this.apiLink)
            .map(this.extractData)
            .subscribe(function (data) {
            _this.summoner = data;
            // console.dir(data);
            _this.playerList.push(data);
        });
    };
    RiotResults.prototype.extractData = function (res) {
        var the_bodies_hit_the_floor = res.json();
        return the_bodies_hit_the_floor;
    };
    RiotResults.prototype.onNavBtnTap = function () {
        this.router.navigate(['']);
    };
    RiotResults.prototype.onTapNickName = function () {
        var link = this.addFriend + this.playerList[0]["summonerName"];
        this.http.get(link)
            .map(this.extractData)
            .subscribe(function (data) {
            console.dir(data);
        });
    };
    return RiotResults;
}());
RiotResults = __decorate([
    core_1.Component({
        selector: "ns-riot-results",
        moduleId: module.id,
        templateUrl: "./riot.results.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, http_1.Http])
], RiotResults);
exports.RiotResults = RiotResults;
// http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=yPestis
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC5yZXN1bHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC5yZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0NBQXdEO0FBQ3hELDBDQUFpRTtBQUdqRSxpQ0FBK0I7QUFTL0IsSUFBYSxXQUFXO0lBT3BCLHFCQUFxQixLQUFxQixFQUFVLE1BQWMsRUFBVSxJQUFVO1FBQWpFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFMdEYsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyw0REFBNEQsQ0FBQztRQUN2RSxjQUFTLEdBQUcsc0RBQXNELENBQUM7UUFDbkUsZUFBVSxHQUFrQixFQUFFLENBQUM7SUFFMkQsQ0FBQztJQUUzRiw4QkFBUSxHQUFSO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIscUJBQXFCO1lBQ3JCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FDSixDQUFDO0lBQ2xCLENBQUM7SUFDTyxpQ0FBVyxHQUFuQixVQUFvQixHQUFhO1FBRTdCLElBQUksd0JBQXdCLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztJQUNwQyxDQUFDO0lBRU0saUNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLG1DQUFhLEdBQXBCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDSixDQUFDO0lBQ2xCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF6Q1ksV0FBVztJQUx2QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtLQUNyQyxDQUFDO3FDQVE4Qix1QkFBYyxFQUFrQixlQUFNLEVBQWdCLFdBQUk7R0FQN0UsV0FBVyxDQXlDdkI7QUF6Q1ksa0NBQVc7QUEyQ3hCLG9FQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzdW1tb25lck1vZGVsIH0gZnJvbSBcIi4vc3VtbW9uZXIubW9kZWxcIjtcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHBhZ2VNb2R1bGUgPSByZXF1aXJlKFwidWkvcGFnZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtcmlvdC1yZXN1bHRzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yaW90LnJlc3VsdHMuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmlvdFJlc3VsdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc3VtbW9uZXI6IHN1bW1vbmVyTW9kZWw7XHJcbiAgICBuaWNrbmFtZSA9IFwiXCI7XHJcbiAgICBhcGlMaW5rID0gXCJodHRwOi8vY2thbWluc2tpLnBsL3Jpb3RhcGkvZ2V0UGxheWVyU3RhdHMucGhwP3BsYXllck5hbWU9XCI7XHJcbiAgICBhZGRGcmllbmQgPSBcImh0dHA6Ly9ja2FtaW5za2kucGwvcmlvdGFwaS9nZXRGcmllbmQucGhwP2FkZEZyaWVuZD1cIjtcclxuICAgIHBsYXllckxpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgaHR0cDogSHR0cCApIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hcGlMaW5rICs9IHRoaXMucm91dGUucGFyYW1zWydfdmFsdWUnXVsnc3VtbW9uZXJOYW1lJ107XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCh0aGlzLmFwaUxpbmspXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdW1tb25lciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcihkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTGlzdC5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xyXG5cclxuICAgICAgICBsZXQgdGhlX2JvZGllc19oaXRfdGhlX2Zsb29yID0gcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gdGhlX2JvZGllc19oaXRfdGhlX2Zsb29yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk5hdkJ0blRhcCgpOiB2b2lke1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRhcE5pY2tOYW1lKCl7XHJcbiAgICAgICAgdmFyIGxpbmsgPSB0aGlzLmFkZEZyaWVuZCArIHRoaXMucGxheWVyTGlzdFswXVtcInN1bW1vbmVyTmFtZVwiXTtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KGxpbmspXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBodHRwOi8vY2thbWluc2tpLnBsL3Jpb3RhcGkvZ2V0UGxheWVyU3RhdHMucGhwP3BsYXllck5hbWU9eVBlc3Rpc1xyXG4iXX0=