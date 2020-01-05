import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from "@angular/forms";

import { map, tap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Article } from '../shared/article.model';


@Injectable({
  providedIn: 'root'
})

export class SearchService {
  constructor(private http: HttpClient) { }

  search(searchForm: FormGroup) {
    const searchTerm = searchForm.value.searchBar;
    const url =
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=dafb72731f894aa7ad606233959e90e5`;

    return this.http.get<{ [key: string]: Article[] }>(url)
      .pipe(
        map(res => {
          const articles: Article[] = [];
          for (const article of res.articles) {
            if (article.title != null) {
              articles.push({ ...article, date: article.publishedAt.slice(0, 10) });
            }
          }
          return [...articles];
        })
      );

    // .value.searchBar
    // .subscribe(res => {
    //   console.log(...res);
    // });
  }

}
