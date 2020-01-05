import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';
import { SearchService } from './search.service';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(
    private articleService: ArticleService,
    private searchService: SearchService
  ) { }


  faSearch = faSearch;
  filters = false;
  searchForm: FormGroup;
  articles: Article[];

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchBar: new FormControl('red dead redemption'),
      opinions: new FormControl(null),
      fromDate: new FormControl(null),
      toDate: new FormControl(null)
    });

    this.searchService.search(this.searchForm)
      .subscribe(articles => {
        this.articles = articles;
      });


  }

  toggleFilters() {
    this.filters = !this.filters;
  }

  onSubmit() {
    console.log(this.searchForm);
    if (this.searchForm.value.searchBar === null) {
      return;
    }
    this.searchService.search(this.searchForm)
      .subscribe(articles => {
        this.articles = articles;
      });
  }


}
