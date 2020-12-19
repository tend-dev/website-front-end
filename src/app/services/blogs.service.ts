import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject, of, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Blog, BlogPostResponse } from '@models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService extends EntityCollectionServiceBase<Blog> {
  private blogDetailSubject$ = new Subject<string>();
  public blog$: Observable<string> = this.blogDetailSubject$.asObservable();
  private urlPrefix = '/blog';
  private apiURL = 'https://recommend.careof.com.au/api/1.1/wf/';

  constructor(
    private http: HttpClient,
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Blog', serviceElementsFactory);
  }

  getBlogPostsFromBubble(): Observable<any> {
    var subject = new Subject<any[]>();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer cd66bf825799d2cd127e640a5767cfeb',
        'Content-Type' : 'text/plain'
      })
    };
    this.http.post<any>(this.apiURL + 'GetBlogPosts', { httpOptions}).subscribe(
      items => {
        let out = [];
        items.response.blogposts.map(post => {
          let obj = {
              id: post._id,
              title: post.Title,
              content: post.Content,
              created: post['Created Date'],
              author: post['Created By'],
              image: post.Thumbnail,
              thumbnail: post.Thumbnail
            }
            out.push(obj);
        });
        subject.next(out);
      }
    );

    return subject.asObservable();
  }

  getBlogById(id: string) {
    var subject = new Subject<any>();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer cd66bf825799d2cd127e640a5767cfeb',
        'Content-Type' : 'text/plain'
      })
    };
    let body = {
      'id' : id
    }
    this.http.post<any>(this.apiURL + '/GetBlogPost?id=' + id, httpOptions).subscribe(
      r => {
        let post = r.response.blogpost;
        let out = {
          id: post._id,
          title: post.Title,
          content: post.Content,
          created: post['Created Date'],
          author: post['Created By'],
          authorName: post['Created By'],
          image: post.Thumbnail,
          thumbnail: post.Thumbnail
        };
        subject.next(out);
      }
    );

    return subject.asObservable();
  }

  updateBlog(formData: FormData, blog: Partial<Blog>): string {
    // const url = `${this.urlPrefix}/${blog.id}`;

    // return this.http.patch<Blog>(url, formData);
    return ''
  }

  createBlog(formData: FormData): string  {
    // const url = this.urlPrefix;

    // return this.http.post<any>(url, formData)
    //   .pipe(
    //     pluck('data')
    //   );
    return ''
  }

  deleteBlog(id) {
    const url: string = `${this.urlPrefix}/${id}`;

    return this.http.delete<Blog>(url, id);
  }

}
