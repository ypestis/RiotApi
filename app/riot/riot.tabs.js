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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlvdC50YWJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmlvdC50YWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQyxzQ0FBNEg7QUFFekgsZ0NBQTZCO0FBQzdCLGtEQUErRjtBQU0vRixJQUFhLGFBQWE7SUFVdEIsdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSnBCLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQUsxQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCx1Q0FBZSxHQUFmO1FBQUEsaUJBc0JDO1FBckJHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyw0QkFBWSxDQUFDLHlCQUF5QixFQUFFLFVBQUMsSUFBbUM7WUFDbkcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQztvQkFDRixpQ0FBaUM7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUVwQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ2xDLEtBQUssQ0FBQztnQkFDVixLQUFLLENBQUM7b0JBQ0Ysa0NBQWtDO29CQUNsQyxLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUVsQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLGlDQUFpQztvQkFDakMsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDbEMsS0FBSyxDQUFDO1lBQ2QsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELG1DQUFXLEdBQVgsY0FBZ0IsQ0FBQztJQUNyQixvQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUFwQ1k7SUFBUixZQUFLLEVBQUU7O2lEQUFvQjtBQUNsQjtJQUFULGFBQU0sRUFBRTs7NkNBQXFDO0FBRTNCO0lBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDOzhCQUFPLGlCQUFVOzJDQUFDO0FBUjNCLGFBQWE7SUFKekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxxRkFBcUY7S0FDbEcsQ0FBQztxQ0FXNEIsV0FBSTtHQVZyQixhQUFhLENBeUN6QjtBQXpDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIiBpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4gICAgaW1wb3J0IHtQYWdlfSBmcm9tICd1aS9wYWdlJztcclxuICAgIGltcG9ydCB7U2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtLCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YX0gZnJvbSAndWkvc2VnbWVudGVkLWJhcic7XHJcblxyXG4gICAgQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICd0YWJzJyxcclxuICAgICAgICB0ZW1wbGF0ZTogJzxTZWdtZW50ZWRCYXIgI3RhYnMgW2l0ZW1zXT1cIml0ZW1zXCIgW3NlbGVjdGVkSW5kZXhdPVwic2VsZWN0ZWRJbmRleFwiPjwvU2VnbWVudGVkQmFyPidcclxuICAgIH0pXHJcbiAgICBleHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICAgICAgICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgaXRlbXM6IEFycmF5PGFueT47XHJcbiAgICAgICAgc2VsZWN0ZWQgOiBudW1iZXI7XHJcbiAgICAgICAgLy8gQElucHV0KCdhYWEnKSBhYWEgPSB0aGlzLnNlbGVjdGVkO1xyXG4gICAgICAgIEBJbnB1dCgpIG1hc3Rlck5hbWU6IG51bWJlcjtcclxuICAgICAgICBAT3V0cHV0KCkgcmVzdWx0ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gICAgICAgIEBWaWV3Q2hpbGQoXCJ0YWJzXCIpIHRhYnM6IEVsZW1lbnRSZWY7IC8vIGVxdWFsIHRvIGdldFZpZXdCeUlkKCkgaW4gTmF0aXZlU2NyaXB0IGNvcmVcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbeyB0aXRsZTogJ0dlbmVyYWwnIH0sIHsgdGl0bGU6ICdCZXN0IDUnIH0sIHsgdGl0bGU6ICdPdGhlcicgfV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYnMubmF0aXZlRWxlbWVudC5vbihTZWdtZW50ZWRCYXIuc2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudCwgKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFyZ3MubmV3SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaXJzdCBzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc3Rlck5hbWUgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQuZW1pdCh0aGlzLm1hc3Rlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWNvbmQgc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXN0ZXJOYW1lID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQuZW1pdCh0aGlzLm1hc3Rlck5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcmQgc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXN0ZXJOYW1lID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQuZW1pdCh0aGlzLm1hc3Rlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbmdPbkRlc3Ryb3koKSB7IH1cclxuICAgIH1cclxuIl19