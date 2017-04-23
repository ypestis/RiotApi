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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUMvQyxrREFBbUU7QUFFbkUsb0RBQXFFO0FBQ3JFLHNDQUF3RDtBQUV4RCx3REFBcUQ7QUFDckQsb0RBQWlEO0FBQ2pELDhDQUFpRDtBQUNqRCw0Q0FBK0M7QUE2Qi9DLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQTNCckIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiw4QkFBZ0I7WUFDaEIsNkJBQXNCO1lBQ3RCLCtCQUF1QjtZQUN2QixpQkFBVTtZQUNWLGtCQUFXO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLDhCQUFhO1lBQ2IsMEJBQVc7WUFDWCx1QkFBWTtZQUNaLHlCQUFhO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsdUJBQVk7WUFDWix5QkFBYTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSnNvbnBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgUmlvdFN0YXJ0cGFnZSB9IGZyb20gXCIuL3Jpb3QvcmlvdC5zdGFydHBhZ2VcIlxuaW1wb3J0IHsgUmlvdFJlc3VsdHMgfSBmcm9tIFwiLi9yaW90L3Jpb3QucmVzdWx0c1wiXG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi9yaW90L3Jpb3QudGFicyc7XG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuL3Jpb3QvcmlvdC50YWInO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgSnNvbnBNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIFJpb3RTdGFydHBhZ2UsXG4gICAgICAgIFJpb3RSZXN1bHRzLFxuICAgICAgICBUYWJDb21wb25lbnQsIFxuICAgICAgICBUYWJzQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRhYkNvbXBvbmVudCwgXG4gICAgICAgIFRhYnNDb21wb25lbnQsXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==