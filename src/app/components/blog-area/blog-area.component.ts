import { Component, OnInit } from '@angular/core';

import { ContactService } from '@services/contact.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.scss']
})
export class BlogAreaComponent implements OnInit {
  posts: any[];
  beUrl = '';

  constructor(private contactService: ContactService) {
    this.beUrl = environment.beURL;
  }

  ngOnInit(): void {
    this.contactService.getPosts()
      .subscribe((posts: any[]) => {
        this.posts = posts.slice(0, 3).map((post) => {
          delete post.content;

          return post;
        });
      });
  }
}
