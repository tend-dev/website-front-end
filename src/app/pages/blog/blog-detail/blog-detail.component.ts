import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { BlogsService } from '@services/blogs.service';
import { Blog } from '@models/blog.interface';
import { environment } from '@env/environment';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  public backEndURL = environment.backEndURL;
  public blogResponse: string;
  public blog: Blog;
  private blogSub: Subscription;

  constructor(
    private blogsService: BlogsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.blogSub = this.blogsService.blog$
      .subscribe(blog => this.blogResponse = blog);

    this.getBlog();
  }

  ngOnDestroy(): void {
    this.blogSub.unsubscribe();
  }

  getBlog(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.blogsService.getBlogById(id).subscribe((data:any)=> {
      this.blog = data;
      console.log(this.blog);
    });
  }
}
