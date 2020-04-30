import { Component, OnInit } from '@angular/core';

import { ContactService } from '@services/contact.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: any[];
  beUrl = '';

  constructor(private contactService: ContactService) {
    this.beUrl = environment.beURL;
  }

  ngOnInit(): void {
    this.contactService.getPosts()
    .subscribe((posts: any[]) => {
      this.posts = posts;
    });
  }
}
