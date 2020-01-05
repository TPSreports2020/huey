import { Component, OnInit } from '@angular/core';


import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  constructor(private articleService: ArticleService) { }

  articles: Article[];

  ngOnInit() {

  }

}
