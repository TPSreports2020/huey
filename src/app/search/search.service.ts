import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }


  search(searchTerm: string) {
    const url =
      `https://newsapi.org/v2/everything?q=syria&apiKey=dafb72731f894aa7ad606233959e90e5`;
    this.http.get(url)
      .subscribe(res => {
        console.log(res);
      })
  }
}
