"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var segmented_bar_1 = require("ui/segmented-bar");
var TabsComponent = (function () {
    function TabsComponent(page) {
        this.page = page;
        this.result = new core_1.EventEmitter();
        this.selectedIndex = 0;
        this.items = [{ title: 'General' }, { title: 'Best 5' }, { title: 'Other' }];
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tabs.nativeElement.on(segmented_bar_1.SegmentedBar.selectedIndexChangedEvent, function (args) {
            switch (args.newIndex) {
                case 0:
                    // console.log('first selected');
                    _this.masterName = 0;
                    _this.result.emit(_this.masterName);
                    break;
                case 1:
                    // console.log('second selected');
                    _this.masterName = 1;
                    _this.result.emit(_this.masterName);
                    break;
                case 2:
                    // console.log('third selected');
                    _this.masterName = 2;
                    _this.result.emit(_this.masterName);
                    break;
            }
        });
    };
    TabsComponent.prototype.ngOnDestroy = function () { };
    return TabsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TabsComponent.prototype, "masterName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TabsComponent.prototype, "result", void 0);
__decorate([
    core_1.ViewChild("tabs"),
    __metadata("design:type", core_1.ElementRef)
], TabsComponent.prototype, "tabs", void 0);
TabsComponent = __decorate([
    core_1.Component({
        selector: 'tabs',
        template: '<SegmentedBar #tabs [items]="items" [selectedIndex]="selectedIndex"></SegmentedBar>'
    }),
    __metadata("design:paramtypes", [page_1.Page])
], TabsComponent);
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC50YWJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC50YWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQyxzQ0FBNEg7QUFFekgsZ0NBQTZCO0FBQzdCLGtEQUErRjtBQU0vRixJQUFhLGFBQWE7SUFVdEIsdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSnBCLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQUsxQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCx1Q0FBZSxHQUFmO1FBQUEsaUJBc0JDO1FBckJHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyw0QkFBWSxDQUFDLHlCQUF5QixFQUFFLFVBQUMsSUFBbUM7WUFDbkcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQztvQkFDRixpQ0FBaUM7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUVwQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ2xDLEtBQUssQ0FBQztnQkFDVixLQUFLLENBQUM7b0JBQ0Ysa0NBQWtDO29CQUNsQyxLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUVsQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLGlDQUFpQztvQkFDakMsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDbEMsS0FBSyxDQUFDO1lBQ2QsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELG1DQUFXLEdBQVgsY0FBZ0IsQ0FBQztJQUNyQixvQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUFwQ1k7SUFBUixZQUFLLEVBQUU7O2lEQUFvQjtBQUNsQjtJQUFULGFBQU0sRUFBRTs7NkNBQXFDO0FBRTNCO0lBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDOzhCQUFPLGlCQUFVOzJDQUFDO0FBUjNCLGFBQWE7SUFKekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxxRkFBcUY7S0FDbEcsQ0FBQztxQ0FXNEIsV0FBSTtHQVZyQixhQUFhLENBeUN6QjtBQXpDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIiBpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbiAgICBpbXBvcnQge1BhZ2V9IGZyb20gJ3VpL3BhZ2UnO1xuICAgIGltcG9ydCB7U2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtLCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YX0gZnJvbSAndWkvc2VnbWVudGVkLWJhcic7XG5cbiAgICBAQ29tcG9uZW50KHtcbiAgICAgICAgc2VsZWN0b3I6ICd0YWJzJyxcbiAgICAgICAgdGVtcGxhdGU6ICc8U2VnbWVudGVkQmFyICN0YWJzIFtpdGVtc109XCJpdGVtc1wiIFtzZWxlY3RlZEluZGV4XT1cInNlbGVjdGVkSW5kZXhcIj48L1NlZ21lbnRlZEJhcj4nXG4gICAgfSlcbiAgICBleHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgICAgICAgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICAgICAgICBpdGVtczogQXJyYXk8YW55PjtcbiAgICAgICAgc2VsZWN0ZWQgOiBudW1iZXI7XG4gICAgICAgIC8vIEBJbnB1dCgnYWFhJykgYWFhID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgICAgQElucHV0KCkgbWFzdGVyTmFtZTogbnVtYmVyO1xuICAgICAgICBAT3V0cHV0KCkgcmVzdWx0ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICAgICAgQFZpZXdDaGlsZChcInRhYnNcIikgdGFiczogRWxlbWVudFJlZjsgLy8gZXF1YWwgdG8gZ2V0Vmlld0J5SWQoKSBpbiBOYXRpdmVTY3JpcHQgY29yZVxuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbeyB0aXRsZTogJ0dlbmVyYWwnIH0sIHsgdGl0bGU6ICdCZXN0IDUnIH0sIHsgdGl0bGU6ICdPdGhlcicgfV07XG4gICAgICAgIH1cbiAgICAgICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgfVxuICAgICAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgICAgICB0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5vbihTZWdtZW50ZWRCYXIuc2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudCwgKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhcmdzLm5ld0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaXJzdCBzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXN0ZXJOYW1lID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQuZW1pdCh0aGlzLm1hc3Rlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWNvbmQgc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyTmFtZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5lbWl0KHRoaXMubWFzdGVyTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcmQgc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFzdGVyTmFtZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5lbWl0KHRoaXMubWFzdGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG5nT25EZXN0cm95KCkgeyB9XG4gICAgfVxuIl19