"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var RiotResults = (function () {
    function RiotResults(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.nick1 = "";
        this.apiLink = "http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=";
        this.errorMessage = '';
    }
    RiotResults.prototype.ngOnInit = function () {
        var _this = this;
        this.nick1 = this.route.params['_value']['summonerName'];
        this.apiLink += this.nick1;
        this.http.get(this.apiLink)
            .map(this.extractData)
            .subscribe(function (data) { return _this.summoner = data; });
    };
    RiotResults.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    RiotResults.prototype.find_user = function () {
        console.dump(this.summoner);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC5yZXN1bHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC5yZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0NBQXdEO0FBQ3hELDBDQUFpRTtBQUdqRSxpQ0FBK0I7QUFFL0IsbUNBQWlDO0FBT2pDLElBQWEsV0FBVztJQU1wQixxQkFBcUIsS0FBcUIsRUFBVSxNQUFjLEVBQVUsSUFBVTtRQUFqRSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSnRGLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxZQUFPLEdBQUcsNERBQTRELENBQUM7UUFDdkUsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFFd0UsQ0FBQztJQUUzRiw4QkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQXBCLENBQW9CLENBQy9CLENBQUM7SUFFbEIsQ0FBQztJQUNPLGlDQUFXLEdBQW5CLFVBQW9CLEdBQWE7UUFFN0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLFdBQVc7SUFMdkIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7S0FDckMsQ0FBQztxQ0FPOEIsdUJBQWMsRUFBa0IsZUFBTSxFQUFnQixXQUFJO0dBTjdFLFdBQVcsQ0EyQnZCO0FBM0JZLGtDQUFXO0FBNkJ4QixvRUFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgc3VtbW9uZXJNb2RlbCB9IGZyb20gXCIuL3N1bW1vbmVyLm1vZGVsXCI7XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1yaW90LXJlc3VsdHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Jpb3QucmVzdWx0cy5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSaW90UmVzdWx0cyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzdW1tb25lcjogc3VtbW9uZXJNb2RlbDtcclxuICAgIG5pY2sxID0gXCJcIjtcclxuICAgIGFwaUxpbmsgPSBcImh0dHA6Ly9ja2FtaW5za2kucGwvcmlvdGFwaS9nZXRQbGF5ZXJTdGF0cy5waHA/cGxheWVyTmFtZT1cIjtcclxuICAgIGVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgaHR0cDogSHR0cCApIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uaWNrMSA9IHRoaXMucm91dGUucGFyYW1zWydfdmFsdWUnXVsnc3VtbW9uZXJOYW1lJ107XHJcbiAgICAgICAgdGhpcy5hcGlMaW5rICs9IHRoaXMubmljazE7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCh0aGlzLmFwaUxpbmspXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5zdW1tb25lciA9IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRfdXNlcigpe1xyXG4gICAgICAgIGNvbnNvbGUuZHVtcCh0aGlzLnN1bW1vbmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gaHR0cDovL2NrYW1pbnNraS5wbC9yaW90YXBpL2dldFBsYXllclN0YXRzLnBocD9wbGF5ZXJOYW1lPXlQZXN0aXMiXX0=