import { Component, OnInit } from '@angular/core';

import { BlogsService } from '@services/blogs.service';

@Component({
  selector: 'app-blogs-dashboard',
  templateUrl: './blogs-dashboard.component.html',
  styleUrls: ['./blogs-dashboard.component.scss']
})
export class BlogsDashboardComponent implements OnInit {

  constructor(
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
  }

}
