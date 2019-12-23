import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('inputRef', { static: false }) inputRef: ElementRef;
  searchForm: FormGroup;
  newsList: any[] = [];

  constructor(private _httpService: HttpService, private _renderer: Renderer2,
              private _router: Router) {
    this.searchForm = new FormGroup({
      q: new FormControl('', [Validators.required])
   });
  }

  ngOnInit() {
    this.searchForm.valueChanges
      .subscribe((value) => {
        let searchQuery: string = value.q;
        if (searchQuery === '') {
          this.newsList = [];
        }
      })
  }

  submitAForm() {
    if(this.searchForm.valid) {
    let params = {};
    
    Object.keys(this.searchForm.value)
    .filter(elem => this.searchForm.controls[elem].value)
    .map(el => params[el] = this.searchForm.controls[el].value);
    
    this._httpService.get(params).subscribe(data => {
      this.newsList = data.articles;
      console.log(this.newsList)
    })
  } else {
    this.searchForm.markAllAsTouched();
      this._renderer.setStyle(this.inputRef.nativeElement, 'box-shadow', 'inset 0 0 0.3em red');
      setTimeout(() => {
        this._renderer.setStyle(this.inputRef.nativeElement, 'box-shadow', '');
      }, 3000);
  }
  }


} 
