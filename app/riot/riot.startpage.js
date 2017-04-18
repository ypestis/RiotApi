"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var RiotStartpage = (function () {
    function RiotStartpage(http) {
        this.http = http;
        this.nick1 = "";
    }
    RiotStartpage.prototype.find_user = function () {
        alert("Ta funkcja jest jeszcze niedostępna");
    };
    RiotStartpage.prototype.ngOnInit = function () {
        var http = require("http");
        http.getJSON("http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=yPestis").then(function (r) {
            console.dump(r);
        }, function (e) {
            console.dump(e);
        });
    };
    RiotStartpage.prototype.onGetDataSuccess = function (res) {
        console.dump(res);
    };
    RiotStartpage.prototype.onGetDataError = function (error) {
        console.dump(error);
    };
    return RiotStartpage;
}());
RiotStartpage = __decorate([
    core_1.Component({
        selector: "ns-riot-startpage",
        moduleId: module.id,
        templateUrl: "./riot.startpage.html",
    }),
    __metadata("design:paramtypes", [http_1.Http])
], RiotStartpage);
exports.RiotStartpage = RiotStartpage;
// http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=yPestis 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC5zdGFydHBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyaW90LnN0YXJ0cGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELHNDQUF3RDtBQUd4RCxpQ0FBK0I7QUFPL0IsSUFBYSxhQUFhO0lBSXRCLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUY5QixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBR1YsQ0FBQztJQUVGLGlDQUFTLEdBQVQ7UUFDSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLG1FQUFtRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUM5RixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFBRSxVQUFVLENBQUM7WUFDVixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHdDQUFnQixHQUF4QixVQUF5QixHQUFHO1FBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVPLHNDQUFjLEdBQXRCLFVBQXVCLEtBQUs7UUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7S0FDdkMsQ0FBQztxQ0FLNEIsV0FBSTtHQUpyQixhQUFhLENBMkJ6QjtBQTNCWSxzQ0FBYTtBQTZCMUIsb0VBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IHJpb3QgfSBmcm9tIFwiLi9yaW90XCI7XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtcmlvdC1zdGFydHBhZ2VcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Jpb3Quc3RhcnRwYWdlLmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIFJpb3RTdGFydHBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbXM6IHJpb3RbXTtcclxuICAgIG5pY2sxID0gXCJcIjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICAgfVxyXG5cclxuICAgIGZpbmRfdXNlcigpe1xyXG4gICAgICAgIGFsZXJ0KFwiVGEgZnVua2NqYSBqZXN0IGplc3pjemUgbmllZG9zdMSZcG5hXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XHJcbiAgICAgICAgaHR0cC5nZXRKU09OKFwiaHR0cDovL2NrYW1pbnNraS5wbC9yaW90YXBpL2dldFBsYXllclN0YXRzLnBocD9wbGF5ZXJOYW1lPXlQZXN0aXNcIikudGhlbihmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmR1bXAocik7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5kdW1wKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25HZXREYXRhU3VjY2VzcyhyZXMpe1xyXG4gICAgICAgIGNvbnNvbGUuZHVtcChyZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIG9uR2V0RGF0YUVycm9yKGVycm9yKXtcclxuICAgICAgICBjb25zb2xlLmR1bXAoZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBodHRwOi8vY2thbWluc2tpLnBsL3Jpb3RhcGkvZ2V0UGxheWVyU3RhdHMucGhwP3BsYXllck5hbWU9eVBlc3RpcyJdfQ==