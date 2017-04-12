"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var RiotList = (function () {
    function RiotList() {
        this.nick1 = "";
    }
    RiotList.prototype.find_user = function () {
        alert(this.nick1);
    };
    RiotList.prototype.ngOnInit = function () {
        // var layout = require("ui/layouts/grid-layout");
        // var resp = this.http.get("https://eune.api.riotgames.com/api/lol/EUNE/v1.3/stats/by-summoner/22067792/ranked?api_key=RGAPI-13F080C8-3E30-4CDE-9428-9D75BACACF7E")
        // .subscribe(
        //     (result) => this.onGetDataSuccess(result),
        //     (error) => this.onGetDataError(error)
        // );
    };
    return RiotList;
}());
RiotList = __decorate([
    core_1.Component({
        selector: "ns-riot-list",
        moduleId: module.id,
        templateUrl: "./riot.list.html",
    }),
    __metadata("design:paramtypes", [])
], RiotList);
exports.RiotList = RiotList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC5saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC5saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFJbEQsaUNBQStCO0FBTy9CLElBQWEsUUFBUTtJQUtqQjtRQUhBLFVBQUssR0FBRyxFQUFFLENBQUM7SUFJVixDQUFDO0lBRUYsNEJBQVMsR0FBVDtRQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxrREFBa0Q7UUFDbEQsb0tBQW9LO1FBQ3BLLGNBQWM7UUFDZCxpREFBaUQ7UUFDakQsNENBQTRDO1FBQzVDLEtBQUs7SUFHVCxDQUFDO0lBU0wsZUFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5QlksUUFBUTtJQUxwQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxrQkFBa0I7S0FDbEMsQ0FBQzs7R0FDVyxRQUFRLENBOEJwQjtBQTlCWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyByaW90IH0gZnJvbSBcIi4vcmlvdFwiO1xyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXJpb3QtbGlzdFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmlvdC5saXN0Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIFJpb3RMaXN0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW1zOiByaW90W107XHJcbiAgICBuaWNrMSA9IFwiXCI7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigvKnByaXZhdGUgaHR0cDogSHR0cCovKSB7XHJcbiAgICAgfVxyXG5cclxuICAgIGZpbmRfdXNlcigpe1xyXG4gICAgICAgIGFsZXJ0KHRoaXMubmljazEpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHZhciBsYXlvdXQgPSByZXF1aXJlKFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiKTtcclxuICAgICAgICAvLyB2YXIgcmVzcCA9IHRoaXMuaHR0cC5nZXQoXCJodHRwczovL2V1bmUuYXBpLnJpb3RnYW1lcy5jb20vYXBpL2xvbC9FVU5FL3YxLjMvc3RhdHMvYnktc3VtbW9uZXIvMjIwNjc3OTIvcmFua2VkP2FwaV9rZXk9UkdBUEktMTNGMDgwQzgtM0UzMC00Q0RFLTk0MjgtOUQ3NUJBQ0FDRjdFXCIpXHJcbiAgICAgICAgLy8gLnN1YnNjcmliZShcclxuICAgICAgICAvLyAgICAgKHJlc3VsdCkgPT4gdGhpcy5vbkdldERhdGFTdWNjZXNzKHJlc3VsdCksXHJcbiAgICAgICAgLy8gICAgIChlcnJvcikgPT4gdGhpcy5vbkdldERhdGFFcnJvcihlcnJvcilcclxuICAgICAgICAvLyApO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBvbkdldERhdGFTdWNjZXNzKHJlcyl7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzLnN1bW1vbmVySWQpO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAvLyBwcml2YXRlIG9uR2V0RGF0YUVycm9yKGVycm9yKXtcclxuICAgIC8vICAgICBjb25zb2xlLmR1bXAoZXJyb3IpO1xyXG4gICAgLy8gfVxyXG59Il19