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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC50YWJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC50YWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBZ0U7QUFFaEUsZ0NBQStCO0FBTS9CLElBQWEsYUFBYTtJQUt6Qix1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFIM0IsU0FBSSxHQUFTLEVBQUUsQ0FBQztRQUNOLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUVYLENBQUM7SUFFOUIsOEJBQU0sR0FBTixVQUFPLEdBQVE7UUFDWCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxHQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1lBQ2QsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUE7UUFDRixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLEtBQWE7UUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBRSxLQUFLLENBQUM7Z0JBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQzFDLElBQUk7Z0JBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUM7SUFDQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBeEJhO0lBQVQsYUFBTSxFQUFFOzsrQ0FBK0I7QUFIL0IsYUFBYTtJQUp6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHVCQUF1QjtLQUNyQyxDQUFDO3FDQU15QixXQUFJO0dBTGxCLGFBQWEsQ0EyQnpCO0FBM0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAnLi90YWIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jpb3QvcmlvdC50YWJzLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IHtcbiAgXG4gICAgdGFiczpUYWJbXSA9IFtdO1xuICAgIEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2Upe31cbiAgICBcbiAgICBhZGRUYWIodGFiOiBUYWIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0YWIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gICAgfVxuICAgIFxuICAgIHNlbGVjdFRhYih0YWI6VGFiKSB7XG4gICAgICAgIHRoaXMudGFicy5tYXAoKHRhYikgPT4ge1xuICAgICAgICAgICAgdGFiLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFiLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTZWxlY3RlZFRhYihpbmRleDogbnVtYmVyKXtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGFicy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYoaT09aW5kZXgpIHRoaXMudGFic1tpXS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRlbHNlIHRoaXMudGFic1tpXS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdH1cbiAgICB9XG59XG4iXX0=