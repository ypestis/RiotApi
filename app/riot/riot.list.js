"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var RiotList = (function () {
    function RiotList() {
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC5saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC5saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFJbEQsaUNBQStCO0FBTy9CLElBQWEsUUFBUTtJQUtqQjtJQUNDLENBQUM7SUFFRiwyQkFBUSxHQUFSO1FBQ0ksa0RBQWtEO1FBQ2xELG9LQUFvSztRQUNwSyxjQUFjO1FBQ2QsaURBQWlEO1FBQ2pELDRDQUE0QztRQUM1QyxLQUFLO0lBR1QsQ0FBQztJQVNMLGVBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLFFBQVE7SUFMcEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsa0JBQWtCO0tBQ2xDLENBQUM7O0dBQ1csUUFBUSxDQTBCcEI7QUExQlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgcmlvdCB9IGZyb20gXCIuL3Jpb3RcIjtcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1yaW90LWxpc3RcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Jpb3QubGlzdC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSaW90TGlzdCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpdGVtczogcmlvdFtdO1xyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKC8qcHJpdmF0ZSBodHRwOiBIdHRwKi8pIHtcclxuICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdmFyIGxheW91dCA9IHJlcXVpcmUoXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIpO1xyXG4gICAgICAgIC8vIHZhciByZXNwID0gdGhpcy5odHRwLmdldChcImh0dHBzOi8vZXVuZS5hcGkucmlvdGdhbWVzLmNvbS9hcGkvbG9sL0VVTkUvdjEuMy9zdGF0cy9ieS1zdW1tb25lci8yMjA2Nzc5Mi9yYW5rZWQ/YXBpX2tleT1SR0FQSS0xM0YwODBDOC0zRTMwLTRDREUtOTQyOC05RDc1QkFDQUNGN0VcIilcclxuICAgICAgICAvLyAuc3Vic2NyaWJlKFxyXG4gICAgICAgIC8vICAgICAocmVzdWx0KSA9PiB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3MocmVzdWx0KSxcclxuICAgICAgICAvLyAgICAgKGVycm9yKSA9PiB0aGlzLm9uR2V0RGF0YUVycm9yKGVycm9yKVxyXG4gICAgICAgIC8vICk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIG9uR2V0RGF0YVN1Y2Nlc3MocmVzKXtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMuc3VtbW9uZXJJZCk7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIHByaXZhdGUgb25HZXREYXRhRXJyb3IoZXJyb3Ipe1xyXG4gICAgLy8gICAgIGNvbnNvbGUuZHVtcChlcnJvcik7XHJcbiAgICAvLyB9XHJcbn0iXX0=