import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  searchForm: FormGroup;
  newsList: any[] = [];

  constructor(private _httpService: HttpService) {
    this.searchForm = new FormGroup({
      q: new FormControl()
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
    let params = {};
    
    Object.keys(this.searchForm.value)
    .filter(elem => this.searchForm.controls[elem].value)
    .map(el => params[el] = this.searchForm.controls[el].value);
    
    this._httpService.get(params).subscribe(data => {
      this.newsList = data.articles;
      console.log(this.newsList)
    })
  }

} 
