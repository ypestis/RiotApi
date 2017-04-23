import { Component, Input, OnInit } from '@angular/core';
import { Tab } from './tab.interface';
import { TabsComponent } from './riot.tabs';

@Component({
  selector: 'tab',
  templateUrl: './riot/riot.tab.html',
  
})
export class TabComponent implements OnInit, Tab {
  
    @Input() tabTitle;
    selected: boolean;
    
    constructor(private tabsComponent: TabsComponent) {}
    
    ngOnInit() {
        this.tabsComponent.addTab(this);
    }
}