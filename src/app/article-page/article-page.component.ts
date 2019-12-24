import { Component } from '@angular/core';
import { single } from '../data-for-pie-chart';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent{
  article;
  // single: any[];
  // gradient: boolean = true;
  // showLegend: boolean = true;
  // showLabels: boolean = true;
  // isDoughnut: boolean = false;

  // colorScheme = {
  //   domain: ['FFF', 'blue', 'yellow', 'pink']
  // };

  constructor(private _route: ActivatedRoute) {
    // Object.assign(this, { single });
    this._route.queryParams.subscribe(params => {
      this.article=params
      console.log(this.article)
    })
   }

  

  // onSelect(data): void {
  //   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  // }


}
