"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var RiotFriends = (function () {
    function RiotFriends(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.getFriendsLink = "http://ckaminski.pl/riotapi/getFriend.php?getFriends";
        this.deleteFriends = "http://ckaminski.pl/riotapi/getFriend.php?deleteFriend=";
        this.playerList = [];
    }
    RiotFriends.prototype.ngOnInit = function () {
        var _this = this;
        console.log("jeste w friedns;");
        this.http.get(this.getFriendsLink)
            .map(this.extractData)
            .subscribe(function (data) {
            console.dir(data);
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var entry = data_1[_i];
                _this.playerList.push(entry);
            }
        });
    };
    RiotFriends.prototype.extractData = function (res) {
        var the_bodies_hit_the_floor = res.json();
        return the_bodies_hit_the_floor;
    };
    RiotFriends.prototype.onItemTap = function (args) {
        //console.log("Item Tapped at cell index: " + args.index);
        console.dir(args.view.bindingContext);
    };
    RiotFriends.prototype.deleteFriend = function (index) {
        var _this = this;
        var link = this.deleteFriends + index;
        this.http.get(link)
            .map(this.extractData)
            .subscribe(function (data) {
            _this.playerList.splice(index, 1);
            alert("Usunięto znajomego!");
        });
    };
    RiotFriends.prototype.showFriend = function (item) {
        this.router.navigate(['/riot-results', item]);
    };
    return RiotFriends;
}());
RiotFriends = __decorate([
    core_1.Component({
        selector: "riot-friends",
        moduleId: module.id,
        templateUrl: "./riot.friends.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, http_1.Http])
], RiotFriends);
exports.RiotFriends = RiotFriends;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC5mcmllbmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC5mcmllbmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0NBQXdEO0FBQ3hELDBDQUFpRTtBQUVqRSxpQ0FBK0I7QUFPL0IsSUFBYSxXQUFXO0lBS3BCLHFCQUFxQixLQUFxQixFQUFVLE1BQWMsRUFBVSxJQUFVO1FBQWpFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFKdEYsbUJBQWMsR0FBRyxzREFBc0QsQ0FBQztRQUN4RSxrQkFBYSxHQUFHLHlEQUF5RCxDQUFDO1FBQzFFLGVBQVUsR0FBa0IsRUFBRSxDQUFDO0lBRTJELENBQUM7SUFFM0YsOEJBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsR0FBRyxDQUFDLENBQWMsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUk7Z0JBQWpCLElBQUksS0FBSyxhQUFBO2dCQUNWLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1FBQ0wsQ0FBQyxDQUNKLENBQUM7SUFDbEIsQ0FBQztJQUVPLGlDQUFXLEdBQW5CLFVBQW9CLEdBQWE7UUFFN0IsSUFBSSx3QkFBd0IsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDO0lBQ3BDLENBQUM7SUFFTSwrQkFBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLDBEQUEwRDtRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLEtBQUs7UUFBekIsaUJBVUM7UUFURyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7YUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FDSixDQUFDO0lBQ2xCLENBQUM7SUFFTSxnQ0FBVSxHQUFqQixVQUFrQixJQUFJO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxXQUFXO0lBTHZCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtLQUNyQyxDQUFDO3FDQU04Qix1QkFBYyxFQUFrQixlQUFNLEVBQWdCLFdBQUk7R0FMN0UsV0FBVyxDQStDdkI7QUEvQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicmlvdC1mcmllbmRzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Jpb3QuZnJpZW5kcy5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFJpb3RGcmllbmRzIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBnZXRGcmllbmRzTGluayA9IFwiaHR0cDovL2NrYW1pbnNraS5wbC9yaW90YXBpL2dldEZyaWVuZC5waHA/Z2V0RnJpZW5kc1wiO1xuICAgIGRlbGV0ZUZyaWVuZHMgPSBcImh0dHA6Ly9ja2FtaW5za2kucGwvcmlvdGFwaS9nZXRGcmllbmQucGhwP2RlbGV0ZUZyaWVuZD1cIjtcbiAgICBwbGF5ZXJMaXN0OiBBcnJheTxPYmplY3Q+ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgaHR0cDogSHR0cCApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJqZXN0ZSB3IGZyaWVkbnM7XCIpO1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuZ2V0RnJpZW5kc0xpbmspXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGVudHJ5IG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJMaXN0LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcblxuICAgICAgICBsZXQgdGhlX2JvZGllc19oaXRfdGhlX2Zsb29yID0gcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHRoZV9ib2RpZXNfaGl0X3RoZV9mbG9vcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCk7XG4gICAgICAgIGNvbnNvbGUuZGlyKGFyZ3Mudmlldy5iaW5kaW5nQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZUZyaWVuZChpbmRleCl7XG4gICAgICAgIHZhciBsaW5rID0gdGhpcy5kZWxldGVGcmllbmRzICsgaW5kZXg7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQobGluaylcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJVc3VuacSZdG8gem5ham9tZWdvIVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93RnJpZW5kKGl0ZW0pe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yaW90LXJlc3VsdHMnLCBpdGVtXSk7XG4gICAgfVxufVxuIl19