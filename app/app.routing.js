"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var riot_startpage_1 = require("./riot/riot.startpage");
var riot_results_1 = require("./riot/riot.results");
var routes = [
    {
        path: "",
        redirectTo: "/riot-start",
        pathMatch: "full"
    },
    {
        path: "riot-start",
        component: riot_startpage_1.RiotStartpage
    },
    {
        path: "riot-results/:summonerName",
        component: riot_results_1.RiotResults,
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSx3REFBcUQ7QUFDckQsb0RBQWlEO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsYUFBYTtRQUN6QixTQUFTLEVBQUUsTUFBTTtLQUNwQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFlBQVk7UUFDbEIsU0FBUyxFQUFFLDhCQUFhO0tBQzNCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLFNBQVMsRUFBRSwwQkFBVztLQUN6QjtDQUNKLENBQUM7QUFNRixJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQUo1QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBSaW90U3RhcnRwYWdlIH0gZnJvbSBcIi4vcmlvdC9yaW90LnN0YXJ0cGFnZVwiXHJcbmltcG9ydCB7IFJpb3RSZXN1bHRzIH0gZnJvbSBcIi4vcmlvdC9yaW90LnJlc3VsdHNcIlxyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IFxyXG4gICAgICAgIHBhdGg6IFwiXCIsIFxyXG4gICAgICAgIHJlZGlyZWN0VG86IFwiL3Jpb3Qtc3RhcnRcIiwgXHJcbiAgICAgICAgcGF0aE1hdGNoOiBcImZ1bGxcIiBcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgICAgIHBhdGg6IFwicmlvdC1zdGFydFwiLCBcclxuICAgICAgICBjb21wb25lbnQ6IFJpb3RTdGFydHBhZ2UgXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgICAgICBwYXRoOiBcInJpb3QtcmVzdWx0cy86c3VtbW9uZXJOYW1lXCIsIFxyXG4gICAgICAgIGNvbXBvbmVudDogUmlvdFJlc3VsdHMsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==