 import {Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, Input,Output,EventEmitter} from '@angular/core';

    import {Page} from 'ui/page';
    import {SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData} from 'ui/segmented-bar';

    @Component({
        selector: 'tabs',
        template: '<SegmentedBar #tabs [items]="items" [selectedIndex]="selectedIndex"></SegmentedBar>'
    })
    export class TabsComponent implements OnInit, OnDestroy, AfterViewInit {
        selectedIndex: number;
        items: Array<any>;
        selected : number;
        // @Input('aaa') aaa = this.selected;
        @Input() masterName: number;
        @Output() result = new EventEmitter<number>();

        @ViewChild("tabs") tabs: ElementRef; // equal to getViewById() in NativeScript core

        constructor(private page: Page) {
            this.selectedIndex = 0;
            this.items = [{ title: 'General' }, { title: 'Best 5' }, { title: 'Other' }];
        }
        ngOnInit() {

        }
        ngAfterViewInit() {
            this.tabs.nativeElement.on(SegmentedBar.selectedIndexChangedEvent, (args: SelectedIndexChangedEventData) => {
                switch (args.newIndex) {
                    case 0:
                        // console.log('first selected');
                        this.masterName = 0;

                        this.result.emit(this.masterName);
                        break;
                    case 1:
                        // console.log('second selected');
                        this.masterName = 1;
                        this.result.emit(this.masterName);

                        break;
                    case 2:
                        // console.log('third selected');
                        this.masterName = 2;
                        this.result.emit(this.masterName);
                        break;
                }
            })
        }
        ngOnDestroy() { }
    }
