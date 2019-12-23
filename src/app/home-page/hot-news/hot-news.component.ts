import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent implements OnInit {
  @ViewChild('titleRef', { static: false }) titleRef: ElementRef;
  hotNewsList: any[] = [];
  color: string;

  constructor(private _httpService: HttpService, private _router: Router,
    private _element: ElementRef) { }

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

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; 
    } 
    //  this._renderer.setStyle(this._element.nativeElement, 'color', color)     
     return color;
 }
}


