import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/classes/globals';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public pages = [
    {
      pageName: `home`,
      title: `Home`,
      iconClass: `custom-icon-home`
    },
    {
      pageName: `saved`,
      title: `Saved`,
      iconClass: `custom-icon-saved`
    },
    {
      pageName: `profile`,
      title: `Profile`,
      iconClass: `custom-icon-profile`
    }
  ];

  constructor(
    public globals: Globals
  ) { }

  ngOnInit() {
  }

}
