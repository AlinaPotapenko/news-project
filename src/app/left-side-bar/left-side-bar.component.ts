import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent implements OnInit {

  constructor(private dragulaService: DragulaService) { 
    this.dragulaService.createGroup("COLUMNS", {
      direction: 'horizontal',
      moves: (el, source, handle) => handle.className === "group-handle"
    });
  }

  public groups: Array<any> = [
    {
      name: "Women's names",
      items: [{ name: 'Angelina' }, { name: 'Kate' }, { name: 'Jane' }, { name: 'Eva' }]
    },
    {
      name: "Men's names",
      items: [{ name: 'Jack' }, { name: 'Marcel' }, { name: 'Viktor' }, { name: 'Leo' }]
    }
  ];

  ngOnInit() {
  }

}
