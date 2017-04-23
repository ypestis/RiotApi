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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSx3REFBcUQ7QUFDckQsb0RBQWlEO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsYUFBYTtRQUN6QixTQUFTLEVBQUUsTUFBTTtLQUNwQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFlBQVk7UUFDbEIsU0FBUyxFQUFFLDhCQUFhO0tBQzNCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLFNBQVMsRUFBRSwwQkFBVztLQUV6QjtDQUNKLENBQUM7QUFNRixJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQUo1QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUmlvdFN0YXJ0cGFnZSB9IGZyb20gXCIuL3Jpb3QvcmlvdC5zdGFydHBhZ2VcIlxuaW1wb3J0IHsgUmlvdFJlc3VsdHMgfSBmcm9tIFwiLi9yaW90L3Jpb3QucmVzdWx0c1wiXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgXG4gICAgICAgIHBhdGg6IFwiXCIsIFxuICAgICAgICByZWRpcmVjdFRvOiBcIi9yaW90LXN0YXJ0XCIsIFxuICAgICAgICBwYXRoTWF0Y2g6IFwiZnVsbFwiIFxuICAgIH0sXG4gICAgeyBcbiAgICAgICAgcGF0aDogXCJyaW90LXN0YXJ0XCIsIFxuICAgICAgICBjb21wb25lbnQ6IFJpb3RTdGFydHBhZ2UgXG4gICAgfSxcbiAgICB7IFxuICAgICAgICBwYXRoOiBcInJpb3QtcmVzdWx0cy86c3VtbW9uZXJOYW1lXCIsIFxuICAgICAgICBjb21wb25lbnQ6IFJpb3RSZXN1bHRzLFxuICAgICAgICBcbiAgICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=