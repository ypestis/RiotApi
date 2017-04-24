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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC5yZXN1bHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC5yZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0NBQXdEO0FBQ3hELDBDQUFpRTtBQUdqRSxpQ0FBK0I7QUFTL0IsSUFBYSxXQUFXO0lBTXBCLHFCQUFxQixLQUFxQixFQUFVLE1BQWMsRUFBVSxJQUFVO1FBQWpFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFKdEYsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU8sR0FBRyw0REFBNEQsQ0FBQztRQUN2RSxlQUFVLEdBQWtCLEVBQUUsQ0FBQztJQUUyRCxDQUFDO0lBRTNGLDhCQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixxQkFBcUI7WUFDckIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUNKLENBQUM7SUFDbEIsQ0FBQztJQUNPLGlDQUFXLEdBQW5CLFVBQW9CLEdBQWE7UUFFN0IsSUFBSSx3QkFBd0IsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDO0lBQ3BDLENBQUM7SUFFTSxpQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLFdBQVc7SUFMdkIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7S0FDckMsQ0FBQztxQ0FPOEIsdUJBQWMsRUFBa0IsZUFBTSxFQUFnQixXQUFJO0dBTjdFLFdBQVcsQ0E2QnZCO0FBN0JZLGtDQUFXO0FBK0J4QixvRUFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgc3VtbW9uZXJNb2RlbCB9IGZyb20gXCIuL3N1bW1vbmVyLm1vZGVsXCI7XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbmltcG9ydCBwYWdlTW9kdWxlID0gcmVxdWlyZShcInVpL3BhZ2VcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXJpb3QtcmVzdWx0c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmlvdC5yZXN1bHRzLmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIFJpb3RSZXN1bHRzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHN1bW1vbmVyOiBzdW1tb25lck1vZGVsO1xyXG4gICAgbmlja25hbWUgPSBcIlwiO1xyXG4gICAgYXBpTGluayA9IFwiaHR0cDovL2NrYW1pbnNraS5wbC9yaW90YXBpL2dldFBsYXllclN0YXRzLnBocD9wbGF5ZXJOYW1lPVwiO1xyXG4gICAgcGxheWVyTGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBodHRwOiBIdHRwICkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFwaUxpbmsgKz0gdGhpcy5yb3V0ZS5wYXJhbXNbJ192YWx1ZSddWydzdW1tb25lck5hbWUnXTtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpTGluaylcclxuICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bW1vbmVyID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJMaXN0LnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgIGxldCB0aGVfYm9kaWVzX2hpdF90aGVfZmxvb3IgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiB0aGVfYm9kaWVzX2hpdF90aGVfZmxvb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTmF2QnRuVGFwKCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGh0dHA6Ly9ja2FtaW5za2kucGwvcmlvdGFwaS9nZXRQbGF5ZXJTdGF0cy5waHA/cGxheWVyTmFtZT15UGVzdGlzXHJcbiJdfQ==