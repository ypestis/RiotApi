import { Component, EventEmitter, Output } from '@angular/core';
import { Tab } from './tab.interface';
import { Page } from "ui/page";

@Component({
  selector: 'tabs',
  templateUrl: './riot/riot.tabs.html',
})
export class TabsComponent {
  
    tabs:Tab[] = [];
    @Output() selected = new EventEmitter();

	constructor(private page: Page){}
    
    addTab(tab: Tab) {
        if (!this.tabs.length) {
            tab.selected = true;
        }
        this.tabs.push(tab);
    }
    
    selectTab(tab:Tab) {
        this.tabs.map((tab) => {
            tab.selected = true;
        })
        tab.selected = true;
        // this.selected.emit({selectedTab: tab});    
    }

    changeSelectedTab(index: number){
		for (var i = 0; i < this.tabs.length; i++) {
			if(i==index) this.tabs[i].selected = true;
			else this.tabs[i].selected = false;
		}
    }
}
