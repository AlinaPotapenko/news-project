import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent implements OnInit {

  hotNewsList: any[] = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {

    this._httpService.getHotNews().subscribe(data => {
      this.hotNewsList= data.articles.filter((elem) => {
        if(elem.hasOwnProperty('content') && elem['content'] == null) {
          return false;
        } else {
          return true;
        }
      })
      console.log(this.hotNewsList)
    })
  }


  navigateToArticle() {
    this._router.navigate(['article']).then();
  }
 }

