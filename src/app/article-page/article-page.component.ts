import { Component, OnInit } from '@angular/core';
import { single } from '../data-for-pie-chart';
import { ActivatedRoute } from '@angular/router';
import { HotArticleService } from '../home-page/hot-news/hot-news.component';


@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit{
  article;
  article2: any[];
  // single: any[];
  // gradient: boolean = true;
  // showLegend: boolean = true;
  // showLabels: boolean = true;
  // isDoughnut: boolean = false;

  // colorScheme = {
  //   domain: ['FFF', 'blue', 'yellow', 'pink']
  // };

  constructor(private _route: ActivatedRoute, private _hotArticleService: HotArticleService) {
    // Object.assign(this, { single });
    this._route.queryParams.subscribe(params => {
      this.article=params
      console.log(this.article)
    })
  } 

  ngOnInit() {
    this._hotArticleService.getMessage().subscribe(data => this.article2 = data);
    console.log(this.article2)
  }

  // onSelect(data): void {
  //   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  // }


}
