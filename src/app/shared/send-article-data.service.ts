import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendArticleDataService {
  articleMessage = new BehaviorSubject<any>('')
  article = this.articleMessage.asObservable();

  constructor() { }

  sendMessage(msg) {
    this.articleMessage.next(msg);
  } 

  getMessage(): Observable<any> {
    return this.articleMessage.asObservable();
  }

 }
