"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var http_1 = require("nativescript-angular/http");
var forms_1 = require("nativescript-angular/forms");
var http_2 = require("@angular/http");
var riot_startpage_1 = require("./riot/riot.startpage");
var riot_results_1 = require("./riot/riot.results");
var riot_friends_1 = require("./riot/riot.friends");
var riot_tabs_1 = require("./riot/riot.tabs");
var riot_tab_1 = require("./riot/riot.tab");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            http_1.NativeScriptHttpModule,
            forms_1.NativeScriptFormsModule,
            http_2.HttpModule,
            http_2.JsonpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            riot_startpage_1.RiotStartpage,
            riot_results_1.RiotResults,
            riot_friends_1.RiotFriends,
            riot_tab_1.TabComponent,
            riot_tabs_1.TabsComponent,
        ],
        providers: [
            riot_tab_1.TabComponent,
            riot_tabs_1.TabsComponent,
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUMvQyxrREFBbUU7QUFFbkUsb0RBQXFFO0FBQ3JFLHNDQUF3RDtBQUV4RCx3REFBcUQ7QUFDckQsb0RBQWlEO0FBQ2pELG9EQUFpRDtBQUNqRCw4Q0FBaUQ7QUFDakQsNENBQStDO0FBOEIvQyxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUE1QnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLDZCQUFzQjtZQUN0QiwrQkFBdUI7WUFDdkIsaUJBQVU7WUFDVixrQkFBVztTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWiw4QkFBYTtZQUNiLDBCQUFXO1lBQ1gsMEJBQVc7WUFDWCx1QkFBWTtZQUNaLHlCQUFhO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsdUJBQVk7WUFDWix5QkFBYTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBKc29ucE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgUmlvdFN0YXJ0cGFnZSB9IGZyb20gXCIuL3Jpb3QvcmlvdC5zdGFydHBhZ2VcIlxyXG5pbXBvcnQgeyBSaW90UmVzdWx0cyB9IGZyb20gXCIuL3Jpb3QvcmlvdC5yZXN1bHRzXCJcclxuaW1wb3J0IHsgUmlvdEZyaWVuZHMgfSBmcm9tIFwiLi9yaW90L3Jpb3QuZnJpZW5kc1wiXHJcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tICcuL3Jpb3QvcmlvdC50YWJzJztcclxuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9yaW90L3Jpb3QudGFiJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIEpzb25wTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIFJpb3RTdGFydHBhZ2UsXHJcbiAgICAgICAgUmlvdFJlc3VsdHMsXHJcbiAgICAgICAgUmlvdEZyaWVuZHMsXHJcbiAgICAgICAgVGFiQ29tcG9uZW50LFxyXG4gICAgICAgIFRhYnNDb21wb25lbnQsXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgVGFiQ29tcG9uZW50LFxyXG4gICAgICAgIFRhYnNDb21wb25lbnQsXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19