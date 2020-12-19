import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Blog } from '@models/blog.interface';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent {
  @Input() blogs: any[];

}
