"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var TabsComponent = (function () {
    function TabsComponent(page) {
        this.page = page;
        this.tabs = [];
        this.selected = new core_1.EventEmitter();
    }
    TabsComponent.prototype.addTab = function (tab) {
        if (!this.tabs.length) {
            tab.selected = true;
        }
        this.tabs.push(tab);
    };
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.map(function (tab) {
            tab.selected = true;
        });
        tab.selected = true;
        // this.selected.emit({selectedTab: tab});    
    };
    TabsComponent.prototype.changeSelectedTab = function (index) {
        for (var i = 0; i < this.tabs.length; i++) {
            if (i == index)
                this.tabs[i].selected = true;
            else
                this.tabs[i].selected = false;
        }
    };
    return TabsComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TabsComponent.prototype, "selected", void 0);
TabsComponent = __decorate([
    core_1.Component({
        selector: 'tabs',
        templateUrl: './riot/riot.tabs.html',
    }),
    __metadata("design:paramtypes", [page_1.Page])
], TabsComponent);
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC50YWJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC50YWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBZ0U7QUFFaEUsZ0NBQStCO0FBTS9CLElBQWEsYUFBYTtJQUt6Qix1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFIM0IsU0FBSSxHQUFTLEVBQUUsQ0FBQztRQUNOLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUVYLENBQUM7SUFFOUIsOEJBQU0sR0FBTixVQUFPLEdBQVE7UUFDWCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxHQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBQ2QsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUE7UUFDRixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQiw4Q0FBOEM7SUFDbEQsQ0FBQztJQUVELHlDQUFpQixHQUFqQixVQUFrQixLQUFhO1FBQ2pDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUUsS0FBSyxDQUFDO2dCQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUMxQyxJQUFJO2dCQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDO0lBQ0MsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQXpCYTtJQUFULGFBQU0sRUFBRTs7K0NBQStCO0FBSC9CLGFBQWE7SUFKekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSx1QkFBdUI7S0FDckMsQ0FBQztxQ0FNeUIsV0FBSTtHQUxsQixhQUFhLENBNEJ6QjtBQTVCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYiB9IGZyb20gJy4vdGFiLmludGVyZmFjZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yaW90L3Jpb3QudGFicy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCB7XG4gIFxuICAgIHRhYnM6VGFiW10gPSBbXTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKXt9XG4gICAgXG4gICAgYWRkVGFiKHRhYjogVGFiKSB7XG4gICAgICAgIGlmICghdGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGFiLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhYnMucHVzaCh0YWIpO1xuICAgIH1cbiAgICBcbiAgICBzZWxlY3RUYWIodGFiOlRhYikge1xuICAgICAgICB0aGlzLnRhYnMubWFwKCh0YWIpID0+IHtcbiAgICAgICAgICAgIHRhYi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgIHRhYi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuc2VsZWN0ZWQuZW1pdCh7c2VsZWN0ZWRUYWI6IHRhYn0pOyAgICBcbiAgICB9XG5cbiAgICBjaGFuZ2VTZWxlY3RlZFRhYihpbmRleDogbnVtYmVyKXtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGFicy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYoaT09aW5kZXgpIHRoaXMudGFic1tpXS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRlbHNlIHRoaXMudGFic1tpXS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdH1cbiAgICB9XG59XG4iXX0=