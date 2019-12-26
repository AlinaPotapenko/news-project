import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { Router, NavigationExtras } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

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
    private _hotArticleService: HotArticleService) { }

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
    this._hotArticleService.sendMessage(article);
    let navigationExtras: NavigationExtras = {
      queryParams: article
    }
    this._router.navigate(['article'], navigationExtras).then();
  }

  getRandomColor() {
    // let letters = '0123456789ABCDEF';
    // let color = '#';
    // for (var i = 0; i < 6; i++) {
    //   color += letters[Math.floor(Math.random() * 16)]; 
    // } 
    // //  this._renderer.setStyle(this._element.nativeElement, 'color', color)     
    //  return color;
 }

  setColor() {
    for (let i = 0; i < 15; i++) {
      var color = Math.floor(0x1000000 * Math.random()).toString(16);
      let finalColor = '#' + ('000000' + color).slice(-6);
      this.color.push(finalColor)
    }
    let index = 0;
    for (let elem of this.hotNewsList) {
      elem["color"] = this.color[index]
      index++
    }
    console.log(this.hotNewsList)
  }
}

export class HotArticleService {
  private hotArticleMessage = new BehaviorSubject<any>('')

  sendMessage(msg) {
    this.hotArticleMessage.next({text: msg});
  } 

  getMessage() {
    return this.hotArticleMessage.asObservable();
  }
} 

