"use strict";
var core_1 = require("@angular/core");
var riot_tabs_1 = require("./riot.tabs");
var TabComponent = (function () {
    function TabComponent(tabsComponent) {
        this.tabsComponent = tabsComponent;
    }
    TabComponent.prototype.ngOnInit = function () {
        this.tabsComponent.addTab(this);
    };
    return TabComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TabComponent.prototype, "tabTitle", void 0);
TabComponent = __decorate([
    core_1.Component({
        selector: 'tab',
        templateUrl: './riot/riot.tab.html',
    }),
    __metadata("design:paramtypes", [riot_tabs_1.TabsComponent])
], TabComponent);
exports.TabComponent = TabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC50YWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyaW90LnRhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlEO0FBRXpELHlDQUE0QztBQU81QyxJQUFhLFlBQVk7SUFLckIsc0JBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQztJQUVwRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFSWTtJQUFSLFlBQUssRUFBRTs7OENBQVU7QUFGVCxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSxzQkFBc0I7S0FFcEMsQ0FBQztxQ0FNcUMseUJBQWE7R0FMdkMsWUFBWSxDQVV4QjtBQVZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYiB9IGZyb20gJy4vdGFiLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tICcuL3Jpb3QudGFicyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Jpb3QvcmlvdC50YWIuaHRtbCcsXHJcbiAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIFRhYiB7XHJcbiAgXHJcbiAgICBASW5wdXQoKSB0YWJUaXRsZTtcclxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYnNDb21wb25lbnQ6IFRhYnNDb21wb25lbnQpIHt9XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudGFic0NvbXBvbmVudC5hZGRUYWIodGhpcyk7XHJcbiAgICB9XHJcbn0iXX0=