import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent implements OnInit {

  hotNewsList: any[] = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {

    this._httpService.getHotNews().subscribe(data => {
      this.hotNewsList = data.articles;
      console.log(this.hotNewsList)
    })
    }

}
