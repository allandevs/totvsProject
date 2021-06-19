import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public filterNews: any;
  public news: any;
  constructor(private route: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  getNews() {
    this.route.navigate([`search/${this.filterNews}`]);
    this.apiService.getApi().subscribe((result: any) => {
      this.news = result.articles.filter(({ title }: any) =>
        title.toLowerCase().includes(this.filterNews.toLowerCase())
      );
    });
  }
}
