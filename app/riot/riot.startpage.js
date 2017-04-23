"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var RiotStartpage = (function () {
    function RiotStartpage(router) {
        this.router = router;
        this.nick1 = "darterz";
    }
    RiotStartpage.prototype.find_user = function () {
        this.router.navigate(['/riot-results', this.nick1]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC5zdGFydHBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyaW90LnN0YXJ0cGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUV6QyxpQ0FBK0I7QUFPL0IsSUFBYSxhQUFhO0lBR3RCLHVCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZsQyxVQUFLLEdBQUcsU0FBUyxDQUFDO0lBR2pCLENBQUM7SUFFRixpQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO0tBQ3ZDLENBQUM7cUNBSThCLGVBQU07R0FIekIsYUFBYSxDQVN6QjtBQVRZLHNDQUFhO0FBVzFCLG9FQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1yaW90LXN0YXJ0cGFnZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmlvdC5zdGFydHBhZ2UuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmlvdFN0YXJ0cGFnZSB7XHJcbiAgICBuaWNrMSA9IFwiZGFydGVyelwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICB9XHJcblxyXG4gICAgZmluZF91c2VyKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmlvdC1yZXN1bHRzJywgdGhpcy5uaWNrMV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBodHRwOi8vY2thbWluc2tpLnBsL3Jpb3RhcGkvZ2V0UGxheWVyU3RhdHMucGhwP3BsYXllck5hbWU9eVBlc3Rpc1xyXG4iXX0=