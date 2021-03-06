import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Blog } from '@models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService extends EntityCollectionServiceBase<Blog> {
  private blogDetailSubject$ = new Subject<Blog>();
  public blog$: Observable<Blog> = this.blogDetailSubject$.asObservable();
  private urlPrefix = '/blog';

  constructor(
    private http: HttpClient,
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Blog', serviceElementsFactory);
  }

  getBlogById(id: string) {
    const url = `${this.urlPrefix}/${id}`;
    this.http.get<Blog>(url)
      .subscribe(blog => this.blogDetailSubject$.next(blog));
  }

  updateBlog(formData: FormData, blog: Partial<Blog>): Observable<Blog> {
    const url = `${this.urlPrefix}/${blog.id}`;

    return this.http.patch<Blog>(url, formData);
  }

  createBlog(formData: FormData): Observable<Blog>  {
    const url = this.urlPrefix;

    return this.http.post<any>(url, formData)
      .pipe(
        pluck('data')
      );
  }

  deleteBlog(id) {
    const url: string = `${this.urlPrefix}/${id}`;

    return this.http.delete<Blog>(url, id);
  }

}
