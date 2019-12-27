import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { single } from '../data-for-pie-chart';
import { SendArticleDataService } from '../shared/send-article-data.service';


@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit{
  article: any[] = [];
  subscription: Subscription
  // single: any[];
  // gradient: boolean = true;
  // showLegend: boolean = true;
  // showLabels: boolean = true;
  // isDoughnut: boolean = false;

  // colorScheme = {
  //   domain: ['FFF', 'blue', 'yellow', 'pink']
  // };

  constructor(private _sendArticleDataService: SendArticleDataService) {
    // Object.assign(this, { single });
  } 

  ngOnInit() {
    this.subscription = this._sendArticleDataService.getMessage().subscribe(data => {
      if (data) {
            localStorage.clear();
            localStorage.setItem("article", JSON.stringify(data));
            this.article = data;
            console.log(this.article);
        } else if (!data) {
          this.article = JSON.parse(localStorage.getItem("article"));
          console.log(this.article)
      }})
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  
    
    
  

  // onSelect(data): void {
  //   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  // }


}
