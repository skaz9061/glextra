import { Component, OnInit } from '@angular/core';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  mostRecentArticle = ArticlesComponent.articles[0].title;
  constructor() { }

  ngOnInit(): void {
  }

}
