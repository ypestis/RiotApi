"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var TabsComponent = (function () {
    // @Output() selected = new EventEmitter();
    function TabsComponent(page) {
        this.page = page;
        this.tabs = [];
    }
    TabsComponent.prototype.addTab = function (tab) {
        if (!this.tabs.length) {
            tab.selected = true;
        }
        this.tabs.push(tab);
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
TabsComponent = __decorate([
    core_1.Component({
        selector: 'tabs',
        templateUrl: './riot/riot.tabs.html',
    }),
    __metadata("design:paramtypes", [page_1.Page])
], TabsComponent);
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC50YWJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC50YWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBZ0U7QUFFaEUsZ0NBQStCO0FBTS9CLElBQWEsYUFBYTtJQUd0QiwyQ0FBMkM7SUFFOUMsdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSDNCLFNBQUksR0FBUyxFQUFFLENBQUM7SUFHYSxDQUFDO0lBRTlCLDhCQUFNLEdBQU4sVUFBTyxHQUFRO1FBQ1gsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsS0FBYTtRQUNqQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0MsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFFLEtBQUssQ0FBQztnQkFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDMUMsSUFBSTtnQkFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDcEMsQ0FBQztJQUNDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksYUFBYTtJQUp6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHVCQUF1QjtLQUNyQyxDQUFDO3FDQU15QixXQUFJO0dBTGxCLGFBQWEsQ0FvQnpCO0FBcEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWIgfSBmcm9tICcuL3RhYi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFicycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Jpb3QvcmlvdC50YWJzLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCB7XHJcblxyXG4gICAgdGFiczpUYWJbXSA9IFtdO1xyXG4gICAgLy8gQE91dHB1dCgpIHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2Upe31cclxuXHJcbiAgICBhZGRUYWIodGFiOiBUYWIpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGFicy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGFiLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YWJzLnB1c2godGFiKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTZWxlY3RlZFRhYihpbmRleDogbnVtYmVyKXtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmKGk9PWluZGV4KSB0aGlzLnRhYnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHRlbHNlIHRoaXMudGFic1tpXS5zZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG4gICAgfVxyXG59XHJcbiJdfQ==