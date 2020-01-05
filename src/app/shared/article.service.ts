import { Injectable } from '@angular/core';

import { Subject, Subscription } from 'rxjs';

import { SearchService } from '../search/search.service';
import { Article } from '../shared/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private searchService: SearchService) { }

  articles: Article[];

  articleSub: Subscription;
  // articlesFetched = new Subject<Article[]>();

  // search(searchTerm: string) {
  //   this.articleSub = this.searchService.search(searchTerm)
  //     .subscribe((articles: Article[]) => {
  //       if (articles === null) {
  //         console.log(articles);
  //       } else {
  //         this.articles = articles;
  //       }
  //     });
  // }

  getArticles() {
    return this.articles;
  }

}
