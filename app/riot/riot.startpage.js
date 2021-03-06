"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var RiotStartpage = (function () {
    function RiotStartpage(router) {
        this.router = router;
        this.nickname = "";
    }
    RiotStartpage.prototype.find_user = function () {
        this.router.navigate(['/riot-results', this.nickname]);
    };
    RiotStartpage.prototype.check_friends = function () {
        this.router.navigate(['/riot-friends']);
    };
    return RiotStartpage;
}());
RiotStartpage = __decorate([
    core_1.Component({
        selector: "ns-riot-startpage",
        moduleId: module.id,
        templateUrl: "./riot.startpage.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], RiotStartpage);
exports.RiotStartpage = RiotStartpage;
// http://ckaminski.pl/riotapi/getPlayerStats.php?playerName=yPestis
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC5zdGFydHBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyaW90LnN0YXJ0cGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQU96QyxJQUFhLGFBQWE7SUFHdEIsdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRmxDLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFHYixDQUFDO0lBRUYsaUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRCxxQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtLQUN2QyxDQUFDO3FDQUk4QixlQUFNO0dBSHpCLGFBQWEsQ0FZekI7QUFaWSxzQ0FBYTtBQWMxQixvRUFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXJpb3Qtc3RhcnRwYWdlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yaW90LnN0YXJ0cGFnZS5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSaW90U3RhcnRwYWdlIHtcclxuICAgIG5pY2tuYW1lID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgfVxyXG5cclxuICAgIGZpbmRfdXNlcigpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Jpb3QtcmVzdWx0cycsIHRoaXMubmlja25hbWVdKTtcclxuICAgIH1cclxuICAgIGNoZWNrX2ZyaWVuZHMoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yaW90LWZyaWVuZHMnXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGh0dHA6Ly9ja2FtaW5za2kucGwvcmlvdGFwaS9nZXRQbGF5ZXJTdGF0cy5waHA/cGxheWVyTmFtZT15UGVzdGlzXHJcbiJdfQ==