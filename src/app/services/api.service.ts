import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public urlApi =
    'https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=f8210f01cbef4d8e95d9e09a9229793d';
  constructor(private http: HttpClient) {}

  getApi() {
    return this.http.get(this.urlApi);
  }
}
