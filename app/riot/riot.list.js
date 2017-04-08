"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var RiotList = (function () {
    function RiotList(http) {
        this.http = http;
    }
    RiotList.prototype.ngOnInit = function () {
        var _this = this;
        var layout = require("ui/layouts/grid-layout");
        var resp = this.http.get("https://eune.api.riotgames.com/api/lol/EUNE/v1.3/stats/by-summoner/22067792/ranked?api_key=RGAPI-13F080C8-3E30-4CDE-9428-9D75BACACF7E")
            .subscribe(function (result) { return _this.onGetDataSuccess(result); }, function (error) { return _this.onGetDataError(error); });
    };
    RiotList.prototype.onGetDataSuccess = function (res) {
        console.log(res.summonerId);
    };
    RiotList.prototype.onGetDataError = function (error) {
        console.dump(error);
    };
    return RiotList;
}());
RiotList = __decorate([
    core_1.Component({
        selector: "ns-riot-list",
        moduleId: module.id,
        templateUrl: "./riot.list.html",
    }),
    __metadata("design:paramtypes", [http_1.Http])
], RiotList);
exports.RiotList = RiotList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC5saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC5saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsc0NBQXdEO0FBR3hELGlDQUErQjtBQU8vQixJQUFhLFFBQVE7SUFLakIsa0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzdCLENBQUM7SUFFRiwyQkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1SUFBdUksQ0FBQzthQUNoSyxTQUFTLENBQ04sVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQTdCLENBQTZCLEVBQ3pDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FDeEMsQ0FBQztJQUdOLENBQUM7SUFFTyxtQ0FBZ0IsR0FBeEIsVUFBeUIsR0FBRztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8saUNBQWMsR0FBdEIsVUFBdUIsS0FBSztRQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxRQUFRO0lBTHBCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGtCQUFrQjtLQUNsQyxDQUFDO3FDQU00QixXQUFJO0dBTHJCLFFBQVEsQ0EwQnBCO0FBMUJZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IHJpb3QgfSBmcm9tIFwiLi9yaW90XCI7XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtcmlvdC1saXN0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yaW90Lmxpc3QuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmlvdExpc3QgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbXM6IHJpb3RbXTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGxheW91dCA9IHJlcXVpcmUoXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIpO1xyXG4gICAgICAgIHZhciByZXNwID0gdGhpcy5odHRwLmdldChcImh0dHBzOi8vZXVuZS5hcGkucmlvdGdhbWVzLmNvbS9hcGkvbG9sL0VVTkUvdjEuMy9zdGF0cy9ieS1zdW1tb25lci8yMjA2Nzc5Mi9yYW5rZWQ/YXBpX2tleT1SR0FQSS0xM0YwODBDOC0zRTMwLTRDREUtOTQyOC05RDc1QkFDQUNGN0VcIilcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3MocmVzdWx0KSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB0aGlzLm9uR2V0RGF0YUVycm9yKGVycm9yKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uR2V0RGF0YVN1Y2Nlc3MocmVzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuc3VtbW9uZXJJZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgb25HZXREYXRhRXJyb3IoZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUuZHVtcChlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=