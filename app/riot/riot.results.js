"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
// import { Observable } from 'rxjs/Observable';
require("rxjs/add/operator/catch");
require("ui/segmented-bar");
var RiotResults = (function () {
    function RiotResults(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.nick1 = "";
        this.apiLink = "http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=";
        this.errorMessage = '';
        this.playerList = [];
        this.message = 50;
        this.wtf = 'Kliknij tu kurwa mać!';
    }
    RiotResults.prototype.ngOnInit = function () {
        var _this = this;
        this.nick1 = this.route.params['_value']['summonerName'];
        this.apiLink += this.nick1;
        this.http.get(this.apiLink)
            .map(this.extractData)
            .subscribe(function (data) {
            _this.summoner = data;
            // console.dir(data);
            _this.playerList.push(data);
        });
    };
    RiotResults.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    RiotResults.prototype.onTap = function () {
        this.wtf = 'Kliknij tu kurwa mać!';
    };
    RiotResults.prototype.ngOnChange = function (val) {
        // this.connectionType = val;
        console.log(val);
        this.message = val;
        // console.dir(this.message);
        this.onTap();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC5yZXN1bHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC5yZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0NBQXdEO0FBQ3hELDBDQUFpRTtBQUdqRSxpQ0FBK0I7QUFDL0IsZ0RBQWdEO0FBQ2hELG1DQUFpQztBQUVqQyw0QkFBMEI7QUFXMUIsSUFBYSxXQUFXO0lBZXBCLHFCQUFxQixLQUFxQixFQUFVLE1BQWMsRUFBVSxJQUFVO1FBQWpFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFidEYsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLFlBQU8sR0FBRyw0REFBNEQsQ0FBQztRQUN2RSxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixlQUFVLEdBQWtCLEVBQUUsQ0FBQztRQUl4QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFFBQUcsR0FBVyx1QkFBdUIsQ0FBQztJQUc2QyxDQUFDO0lBRTNGLDhCQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIscUJBQXFCO1lBQ3JCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FDSixDQUFDO0lBQ2xCLENBQUM7SUFDTyxpQ0FBVyxHQUFuQixVQUFvQixHQUFhO1FBRTdCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwyQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyx1QkFBdUIsQ0FBQztJQUN2QyxDQUFDO0lBRU0sZ0NBQVUsR0FBakIsVUFBa0IsR0FBVztRQUN6Qiw2QkFBNkI7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQiw2QkFBNkI7UUFDN0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUFoRFksV0FBVztJQUx2QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtLQUNyQyxDQUFDO3FDQWdCOEIsdUJBQWMsRUFBa0IsZUFBTSxFQUFnQixXQUFJO0dBZjdFLFdBQVcsQ0FnRHZCO0FBaERZLGtDQUFXO0FBa0R4QixvRUFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgc3VtbW9uZXJNb2RlbCB9IGZyb20gXCIuL3N1bW1vbmVyLm1vZGVsXCI7XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCBcInVpL3NlZ21lbnRlZC1iYXJcIjtcclxuXHJcbmltcG9ydCBwYWdlTW9kdWxlID0gcmVxdWlyZShcInVpL3BhZ2VcIik7XHJcbi8vIEZyYW1lTW9kdWxlIGlzIG5lZWRlZCBpbiBvcmRlciB0byBoYXZlIGFuIG9wdGlvbiB0byBuYXZpZ2F0ZSB0byB0aGUgbmV3IHBhZ2UuXHJcbmltcG9ydCBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtcmlvdC1yZXN1bHRzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yaW90LnJlc3VsdHMuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmlvdFJlc3VsdHMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc3VtbW9uZXI6IHN1bW1vbmVyTW9kZWw7XHJcbiAgICBuaWNrMSA9IFwiXCI7XHJcblxyXG4gICAgYXBpTGluayA9IFwiaHR0cDovL2NrYW1pbnNraS5wbC9yaW90YXBpL2dldFBsYXllclN0YXRzLnBocD9wbGF5ZXJOYW1lPVwiO1xyXG4gICAgZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICB0b3RhbEdhbWVzIDogbnVtYmVyO1xyXG4gICAgcGxheWVyTGlzdDogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG4gICAgbWFzdGVyIDogbnVtYmVyO1xyXG4gICAgcHVibGljIGZvbyA6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb25uZWN0aW9uVHlwZSA6IHN0cmluZztcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBudW1iZXIgPSA1MDtcclxuICAgIHB1YmxpYyB3dGY6IHN0cmluZyA9ICdLbGlrbmlqIHR1IGt1cndhIG1hxIchJztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGh0dHA6IEh0dHAgKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmljazEgPSB0aGlzLnJvdXRlLnBhcmFtc1snX3ZhbHVlJ11bJ3N1bW1vbmVyTmFtZSddO1xyXG4gICAgICAgIHRoaXMuYXBpTGluayArPSB0aGlzLm5pY2sxO1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy5hcGlMaW5rKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VtbW9uZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckxpc3QucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRhcCgpe1xyXG4gICAgICAgIHRoaXMud3RmID0gJ0tsaWtuaWogdHUga3Vyd2EgbWHEhyEnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jb25uZWN0aW9uVHlwZSA9IHZhbDtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB2YWw7XHJcbiAgICAgICAgLy8gY29uc29sZS5kaXIodGhpcy5tZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm9uVGFwKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGh0dHA6Ly9ja2FtaW5za2kucGwvcmlvdGFwaS9nZXRQbGF5ZXJTdGF0cy5waHA/cGxheWVyTmFtZT15UGVzdGlzXHJcbiJdfQ==