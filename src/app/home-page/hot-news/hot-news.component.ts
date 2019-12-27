import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { SendArticleDataService } from 'src/app/shared/send-article-data.service';
import { HttpService } from 'src/app/shared/http.service';


@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent implements OnInit {
  @ViewChild('titleRef', { static: false }) titleRef: ElementRef;
  hotNewsList: any[] = [];
  color: any[] = [];
  params = {
    pageSize: 15
  }


  constructor(private _httpService: HttpService, private _router: Router,
    private _sendArticleDataService: SendArticleDataService) { }

  ngOnInit() {

    this._httpService.getHotNews(this.params).subscribe(data => {
      this.hotNewsList= data.articles.filter((elem) => {
        if(elem.hasOwnProperty('content') && elem['content'] == null) {
          return false;
        } else {
          return true;
        }
      })
      this.setColor() 
    })
    }
  
  navigateToArticle(article) {
    (this._sendArticleDataService.sendMessage(article));
   
    this._router.navigate(['article']).then();
  }

  setColor() {
    for (let i = 0; i < 15; i++) {
      let color = Math.floor(0x1000000 * Math.random()).toString(16);
      let finalColor = '#' + ('000000' + color).slice(-6);
      this.color.push(finalColor); 
    }
    let index = 0;
    for (let elem of this.hotNewsList) {
      elem["color"] = this.color[index]
      index++
    }
    console.log(this.hotNewsList)
  }
}


