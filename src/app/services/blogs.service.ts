import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '@env/environment';
import { Blog } from '@models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogsSubject$ = new Subject<Blog[]>();
  public blogs$: Observable<Blog[]> = this.blogsSubject$.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    // ! For Html develop only.
    // Todo: implement whith api
    const url = environment.production === false ? '/assets/mock-data/blogs.json' : environment.apiURL + 'posts';

    this.http.get<Blog[]>(url)
      .subscribe(blogs => this.blogsSubject$.next(blogs));
  }
}
