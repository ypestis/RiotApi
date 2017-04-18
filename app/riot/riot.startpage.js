"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var RiotStartpage = (function () {
    function RiotStartpage(router) {
        this.router = router;
        this.nick1 = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC5zdGFydHBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyaW90LnN0YXJ0cGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUV6QyxpQ0FBK0I7QUFPL0IsSUFBYSxhQUFhO0lBR3RCLHVCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZsQyxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBR1YsQ0FBQztJQUVGLGlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7S0FDdkMsQ0FBQztxQ0FJOEIsZUFBTTtHQUh6QixhQUFhLENBU3pCO0FBVFksc0NBQWE7QUFXMUIsb0VBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXJpb3Qtc3RhcnRwYWdlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yaW90LnN0YXJ0cGFnZS5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSaW90U3RhcnRwYWdlIHtcclxuICAgIG5pY2sxID0gXCJcIjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgIH1cclxuXHJcbiAgICBmaW5kX3VzZXIoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yaW90LXJlc3VsdHMnLCB0aGlzLm5pY2sxXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGh0dHA6Ly9ja2FtaW5za2kucGwvcmlvdGFwaS9nZXRQbGF5ZXJTdGF0cy5waHA/cGxheWVyTmFtZT15UGVzdGlzIl19